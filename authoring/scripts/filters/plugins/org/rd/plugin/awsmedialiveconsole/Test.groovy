
System.out.println("before filter")
filterChain.doFilter(request, response)
System.out.println("after filter")