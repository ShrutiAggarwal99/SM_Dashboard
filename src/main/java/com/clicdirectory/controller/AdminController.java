package com.clicdirectory.controller;

import com.clicdirectory.database.GenericDB;
import com.clicdirectory.entity.*;
import com.clicdirectory.global.Randomizer;
import com.clicdirectory.tables.Leaderboard;
import com.clicdirectory.tables.Link;
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
import java.util.List;

/**
 * User: rishabh
 */
@Controller
@RequestMapping("/admin")
public class AdminController extends BaseController {

    @RequestMapping(value = "/p1" , method = RequestMethod.GET)
    public String arraylist (ModelMap model)
    {
//        List<link> var = (List<link>) GenericDB.getRows(com.clicdirectory.tables.Link.LINK, link.class, null, null, null);
//        model.addAttribute("list",var);

//        model.addAttribute("list",var);

        return "previewmain";
    }

    private static Logger logger = Logger.getLogger(AdminController.class);

    @RequestMapping(method = RequestMethod.POST, value = "/login")
    public @ResponseBody
    ResponseMessage<MemberBase> apply(@RequestBody Member member, ModelMap modelMap, HttpServletResponse response, HttpServletRequest request) {
        MemberBase memberT = new GenericDB<MemberBase>().getRow(com.clicdirectory.tables.Member.MEMBER,MemberBase.class, com.clicdirectory.tables.Member.MEMBER.PASSWORD.eq(member.password).and(com.clicdirectory.tables.Member.MEMBER.EMAIL.eq(member.email)));
        //  boolean t=new GenericDB<String>().updateColumn(com.clicdirectory.tables.Member.MEMBER.FB_TOKEN, "123", com.clicdirectory.tables.Member.MEMBER, com.clicdirectory.tables.Member.MEMBER.PASSWORD.eq("test"));
        // new GenericDB<Member>().addRow(com.clicdirectory.tables.Member.MEMBER,member);
        if(memberT!=null){
            setSession(request,response,memberT);
            return new ResponseMessage<MemberBase>("Login Successful","success",memberT);
        }
        return new ResponseMessage<MemberBase>("Wrong email password combination","failed",memberT);
    }

    private void setSession( HttpServletRequest request,HttpServletResponse response, MemberBase member) {
        Member m =new GenericDB<Member>().getRow(com.clicdirectory.tables.Member.MEMBER,Member.class, com.clicdirectory.tables.Member.MEMBER.PASSWORD.eq(member.password).and(com.clicdirectory.tables.Member.MEMBER.EMAIL.eq(member.email)));
        String  token = Randomizer.getRandomString(12);
        new GenericDB<String>().updateColumn(com.clicdirectory.tables.Member.MEMBER.TOKEN, token, com.clicdirectory.tables.Member.MEMBER, com.clicdirectory.tables.Member.MEMBER.ID.eq(m.id));
        Cookie cookie = new Cookie(ControllerUtils.TOKEN_COOKIE, token);
        cookie.setPath("/");
        cookie.setMaxAge(-1);
        response.addCookie(cookie);
        ControllerUtils.setUserSession(request,m);
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
    public @ResponseBody ResponseMessage<Member> apply1(@RequestBody Member member, ModelMap modelMap, HttpServletResponse response, HttpServletRequest request) {
        MemberBase memberT = new GenericDB<MemberBase>().getRow(com.clicdirectory.tables.Member.MEMBER,MemberBase.class, (com.clicdirectory.tables.Member.MEMBER.EMAIL.eq(member.email)));
        System.out.println(memberT);
        if(memberT==null&&member.email!=null&&member.password!=null&&member.phone!=null){
            member.role="admin";
            Member member1 = new GenericDB<Member>().addRow(com.clicdirectory.tables.Member.MEMBER,member);
            setSession(request,response, member1);
            return new ResponseMessage<Member>("User Created","success",member1);
        }else {
            return new ResponseMessage<Member>("User Already exists !","failure",null);
        }
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

    @RequestMapping(method = RequestMethod.POST, value = "/linker")
    public @ResponseBody ResponseMessage<link> apply15(@RequestBody link member, ModelMap modelMap, HttpServletResponse response, HttpServletRequest request) {
        link member1 = new GenericDB<link>().addRow(com.clicdirectory.tables.Link.LINK,member);

        return new ResponseMessage<link>("User Already exists !","success",null);

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

    @RequestMapping(method = RequestMethod.GET, value = "/data")
    public @ResponseBody String apply6(ModelMap modelMap, HttpServletResponse response, HttpServletRequest request) {
       /* String x = ControllerUtils.getEmailId(request);
        MemberBase memberT = new GenericDB<MemberBase>().getRow(com.clicdirectory.tables.Member.MEMBER,MemberBase.class, com.clicdirectory.tables.Member.MEMBER.EMAIL.eq(x));

        if(memberT==null)
            return "error";
        // modelMap.addAttribute("email",memberT.email);*/
        return "data";
    }
    @RequestMapping(method = RequestMethod.POST, value = "/poster")
    public @ResponseBody ResponseMessage<List<?>> apply16(link member, ModelMap modelMap, HttpServletResponse response, HttpServletRequest request) {
        List<?> member1 = new GenericDB<link>().getRows(com.clicdirectory.tables.Link.LINK,link.class, Link.LINK.POST.isNotNull(),null,null);

        return new ResponseMessage<List<?>>("User Already exists !","success",member1);

    }
    @RequestMapping(method = RequestMethod.POST, value = "/home2")
    public @ResponseBody ResponseMessage<List<?>> apply(link member, ModelMap modelMap, HttpServletResponse response, HttpServletRequest request) {
        List<?> member1 = new GenericDB<link>().getRows(com.clicdirectory.tables.Link.LINK,link.class, Link.LINK.POST.isNotNull(),5,null);

        return new ResponseMessage<List<?>>("User Already exists !","success",member1);

    }
    @RequestMapping(method = RequestMethod.POST, value = "/fac")
    public @ResponseBody ResponseMessage<List<?>> apply17(link member, ModelMap modelMap, HttpServletResponse response, HttpServletRequest request) {
        List<?> member1 = new GenericDB<link>().getRows(com.clicdirectory.tables.Link.LINK,link.class, Link.LINK.POST.contains("facebook"),null,null);

        return new ResponseMessage<List<?>>("User Already exists !","success",member1);

    }
    @RequestMapping(method = RequestMethod.POST, value = "/yout")
    public @ResponseBody ResponseMessage<List<?>> apply18(link member, ModelMap modelMap, HttpServletResponse response, HttpServletRequest request) {
        List<?> member1 = new GenericDB<link>().getRows(com.clicdirectory.tables.Link.LINK,link.class, Link.LINK.POST.contains("youtube"),null,null);

        return new ResponseMessage<List<?>>("User Already exists !","success",member1);

    }
    @RequestMapping(method = RequestMethod.POST, value = "/twit")
    public @ResponseBody ResponseMessage<List<?>> apply19(link member, ModelMap modelMap, HttpServletResponse response, HttpServletRequest request) {
        List<?> member1 = new GenericDB<link>().getRows(com.clicdirectory.tables.Link.LINK,link.class, Link.LINK.POST.contains("twitter"),null,null);

        return new ResponseMessage<List<?>>("User Already exists !","success",member1);

    }

    @RequestMapping(method = RequestMethod.POST, value = "/leader")
    public @ResponseBody ResponseMessage<List<?>> apply20(Leaderboard member, ModelMap modelMap, HttpServletResponse response, HttpServletRequest request) {
        List<?> member1 = new GenericDB<leaderboard>().getRows(com.clicdirectory.tables.Leaderboard.LEADERBOARD, leaderboard.class, Leaderboard.LEADERBOARD.POINTS.isNotNull(),25,Leaderboard.LEADERBOARD.POINTS.desc());

        return new ResponseMessage<List<?>>("User Already exists !","success",member1);

    }
    @RequestMapping(method = RequestMethod.POST, value = "/pointer")
    public @ResponseBody ResponseMessage<Member > apply21(Leaderboard member, ModelMap modelMap, HttpServletResponse response, HttpServletRequest request) {

        String email = ControllerUtils.getEmailId(request);
        leaderboard memberT = new GenericDB<leaderboard>().getRow(Leaderboard.LEADERBOARD,leaderboard.class, Leaderboard.LEADERBOARD.EMAIL.contains(email));
        memberT.points = memberT.points + 10;
        memberT.postsshared = memberT.postsshared + 1;
        leaderboard m = new GenericDB<leaderboard>().updateRow(Leaderboard.LEADERBOARD,memberT,Leaderboard.LEADERBOARD.EMAIL.contains(email));
        return new ResponseMessage<Member>("Points Increased","success",null);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/userfinder")
    public @ResponseBody ResponseMessage<leaderboard> apply22(Leaderboard member, ModelMap modelMap, HttpServletResponse response, HttpServletRequest request) {
        String email = ControllerUtils.getEmailId(request);
        if(email == null)
        {
            return new ResponseMessage<leaderboard>("userinfo","failure",null);
        }

        leaderboard memberT = new GenericDB<leaderboard>().getRow(Leaderboard.LEADERBOARD,leaderboard.class, Leaderboard.LEADERBOARD.EMAIL.contains(email));
        return new ResponseMessage<leaderboard>("userinfo","success",memberT);

    }

}