package com.clicdirectory.controller;

import com.clicdirectory.database.GenericDB;
import com.clicdirectory.entity.Member;
import com.clicdirectory.entity.MemberBase;
import com.clicdirectory.global.Randomizer;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * User: rishabh
 */
@Controller
@RequestMapping("/admin")
public class AdminController extends BaseController {

    private static Logger logger = Logger.getLogger(AdminController.class);

    @RequestMapping(method = RequestMethod.GET, value = "/signup")
    public String signup(ModelMap modelMap, HttpServletResponse response, HttpServletRequest request) {
        return "adminsignup";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/login")
    public String login(ModelMap modelMap, HttpServletResponse response, HttpServletRequest request) {
        return "adminlogin";
    }

    @RequestMapping(method = RequestMethod.POST, value = "/login")
    public @ResponseBody MemberBase apply(@RequestBody Member member, ModelMap modelMap, HttpServletResponse response, HttpServletRequest request) {
        MemberBase memberT = new GenericDB<MemberBase>().getRow(com.clicdirectory.tables.Member.MEMBER,MemberBase.class, com.clicdirectory.tables.Member.MEMBER.PASSWORD.eq(member.password).and(com.clicdirectory.tables.Member.MEMBER.EMAIL.eq(member.email)));
      //  boolean t=new GenericDB<String>().updateColumn(com.clicdirectory.tables.Member.MEMBER.FB_TOKEN, "123", com.clicdirectory.tables.Member.MEMBER, com.clicdirectory.tables.Member.MEMBER.PASSWORD.eq("test"));
       // new GenericDB<Member>().addRow(com.clicdirectory.tables.Member.MEMBER,member);
        if(memberT!=null){
            Member m =new GenericDB<Member>().getRow(com.clicdirectory.tables.Member.MEMBER,Member.class, com.clicdirectory.tables.Member.MEMBER.PASSWORD.eq(member.password).and(com.clicdirectory.tables.Member.MEMBER.EMAIL.eq(member.email)));
            String  token = Randomizer.getRandomString(12);
            new GenericDB<String>().updateColumn(com.clicdirectory.tables.Member.MEMBER.TOKEN, token, com.clicdirectory.tables.Member.MEMBER, com.clicdirectory.tables.Member.MEMBER.ID.eq(m.id));
            Cookie cookie = new Cookie(ControllerUtils.TOKEN_COOKIE, token);
            cookie.setPath("/");
            cookie.setMaxAge(-1);
            response.addCookie(cookie);
            ControllerUtils.setUserSession(request,m);
        }
        return memberT;
    }

    @RequestMapping(method = RequestMethod.POST, value = "/fb_token")
    public @ResponseBody String apply2(@RequestBody Member member, ModelMap modelMap, HttpServletResponse response, HttpServletRequest request) {
        String x = ControllerUtils.getEmailId(request);
        MemberBase memberT = new GenericDB<MemberBase>().getRow(com.clicdirectory.tables.Member.MEMBER,MemberBase.class, com.clicdirectory.tables.Member.MEMBER.EMAIL.eq(x));

        new GenericDB<String>().updateColumn(com.clicdirectory.tables.Member.MEMBER.FB_TOKEN, member.fb_token, com.clicdirectory.tables.Member.MEMBER,
                com.clicdirectory.tables.Member.MEMBER.EMAIL.eq(memberT.email));
        return "done";
    }



    @RequestMapping(method = RequestMethod.POST, value = "/signup")
    public @ResponseBody Member apply1(@RequestBody Member member, ModelMap modelMap, HttpServletResponse response, HttpServletRequest request) {
        return new GenericDB<Member>().addRow(com.clicdirectory.tables.Member.MEMBER,member);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/welcome")
    public  String apply(ModelMap modelMap, HttpServletResponse response, HttpServletRequest request) {
        String x = ControllerUtils.getEmailId(request);
        MemberBase memberT = new GenericDB<MemberBase>().getRow(com.clicdirectory.tables.Member.MEMBER,MemberBase.class, com.clicdirectory.tables.Member.MEMBER.EMAIL.eq(x));

       if(memberT==null)
           return "error";
       // modelMap.addAttribute("email",memberT.email);
        return "fb_login";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/fb")
    public  String apply4(ModelMap modelMap, HttpServletResponse response, HttpServletRequest request) {
       /* String x = ControllerUtils.getEmailId(request);
        MemberBase memberT = new GenericDB<MemberBase>().getRow(com.clicdirectory.tables.Member.MEMBER,MemberBase.class, com.clicdirectory.tables.Member.MEMBER.EMAIL.eq(x));

        if(memberT==null)
            return "error";
        // modelMap.addAttribute("email",memberT.email);*/
        return "fb_data";
    }


}