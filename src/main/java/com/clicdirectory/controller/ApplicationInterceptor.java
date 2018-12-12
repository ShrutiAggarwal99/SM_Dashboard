package com.clicdirectory.controller;

import org.apache.log4j.Logger;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashSet;
import java.util.Set;

public class ApplicationInterceptor implements HandlerInterceptor {

    private static Set<String> redirectorLoggedIns = new HashSet<String>();

    static {
        String ar[] = {"/login", "/signup", ""};
        for (String a : ar) {
            redirectorLoggedIns.add(a);
            redirectorLoggedIns.add(a + "/");
        }
    }
    private static final Logger logger = Logger.getLogger(ApplicationInterceptor.class);

    public boolean preHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object handler) throws Exception {

        if(httpServletRequest.getRequestURI().startsWith("/admin"))
        if (httpServletRequest.getRequestURI().startsWith("/admin")) {
            Boolean isAdmin = ControllerUtils.isUserIAMMMAdmin(httpServletRequest);
            if(httpServletRequest.getRequestURI().startsWith("/admin/login")){
                //
                 if(isAdmin==null){
                     return true;
                 }
                httpServletResponse.sendRedirect("/admin/welcome");
                 return false;
            }
            if(httpServletRequest.getRequestURI().startsWith("/admin/signup") && isAdmin==null){
                //httpServletResponse.sendRedirect("/admin/login");
                return true;
            }
            if (isAdmin!=null&&isAdmin) {
                return true;
            }
            httpServletResponse.sendRedirect("/admin/login");
        }
        return true;
    }

    public void postHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object handler, ModelAndView modelAndView)
            throws Exception {
    }

    public void afterCompletion(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object handler, Exception exception)
            throws Exception {
    }
}