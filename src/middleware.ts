import { NextRequest, NextResponse } from 'next/server';

import { ERoutePrivate, ERoutePublic } from '@/constants/routes';

const middleware = (req: NextRequest) => {
  const url = req.nextUrl.clone();
  const pathname = url.pathname as ERoutePrivate & ERoutePublic;

  // TODO mocked, change after auth implementation
  const isAuthenticated = false;
  const isPublicRoute = Object.values(ERoutePublic).includes(pathname);
  const isPrivateRoute = Object.values(ERoutePrivate).includes(pathname);

  if (!isPublicRoute && !isPrivateRoute) {
    url.pathname = isAuthenticated ? ERoutePrivate.HOME : ERoutePublic.SIGN_UP;

    return NextResponse.redirect(url);
  }

  if (!isAuthenticated && isPrivateRoute) {
    url.pathname = ERoutePublic.SIGN_UP;

    return NextResponse.redirect(url);
  }

  if (isAuthenticated && pathname === ERoutePublic.SIGN_UP) {
    url.pathname = ERoutePrivate.HOME;

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
};

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|img|favicon.ico).*)'],
};

export default middleware;
