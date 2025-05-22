import { type EmailOtpType } from '@supabase/supabase-js';
import { type NextRequest, NextResponse } from 'next/server';

import { createClient } from '@/utils/supabase/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get('token_hash');
  const type = searchParams.get('type') as EmailOtpType | null;
  const next = '/chat';

  const redirectTo = request.nextUrl.clone();
  redirectTo.pathname = next;
  redirectTo.searchParams.delete('token_hash');
  redirectTo.searchParams.delete('type');

  if (token_hash && type) {
    if (process.env.NODE_ENV === 'development') {
      return NextResponse.redirect(redirectTo);
    }

    const supabase = await createClient();

    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    });

    if (!error) {
      redirectTo.searchParams.delete('next');
      return NextResponse.redirect(redirectTo);
    }

    redirectTo.pathname = '/error';
    redirectTo.searchParams.set('message', error.message);
    return NextResponse.redirect(redirectTo);
  }

  const fallbackRedirect = request.nextUrl.clone();
  fallbackRedirect.pathname = '/error';
  fallbackRedirect.searchParams.set('message', 'Missing token or type');
  return NextResponse.redirect(fallbackRedirect);
}