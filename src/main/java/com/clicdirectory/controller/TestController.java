package com.clicdirectory.controller;

import com.clicdirectory.database.GenericDB;
import com.clicdirectory.entity.link;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;
@Controller
//@RequestMapping("/preview")
public class TestController {

//    List<String> var1 = Arrays.asList("idjc","jkdch","sdv");


    @RequestMapping(value = "/p1" , method = RequestMethod.GET)
    public String arraylist (ModelMap model)
    {
//        List<link> var = (List<link>) GenericDB.getRows(com.clicdirectory.tables.Link.LINK, link.class, null, null, null);
//        model.addAttribute("list",var);

//        model.addAttribute("list",var);

        return "previewmain";
    }

    @RequestMapping(value = "/p2", method = RequestMethod.GET)
    public String qwerty (ModelMap model)
    {
        List<link> var = (List<link>) GenericDB.getRows(com.clicdirectory.tables.Link.LINK, link.class, null, null, null);
        model.addAttribute("list",var);
        return "facebook";
    }

    @RequestMapping(value = "/p3", method = RequestMethod.GET)
    public String qwerty1 (ModelMap model)
    {
        List<link> var = (List<link>) GenericDB.getRows(com.clicdirectory.tables.Link.LINK, link.class, null, null, null);
        model.addAttribute("list",var);
        return "youtube";
    }
    @RequestMapping(value = "/p4", method = RequestMethod.GET)
    public String qwerty2 (ModelMap model)
    {
        List<link> var = (List<link>) GenericDB.getRows(com.clicdirectory.tables.Link.LINK, link.class, null, null, null);
        model.addAttribute("list",var);
        return "twitter";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/leaderboard")
    public static String leader( ModelMap modelMap, HttpServletResponse response, HttpServletRequest request) {
        return "leader";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/newsignupr")
    public static String newsignupr( ModelMap modelMap, HttpServletResponse response, HttpServletRequest request) {
        return "allsignupr";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/newsignupl")
    public static String newsignupl( ModelMap modelMap, HttpServletResponse response, HttpServletRequest request) {
        return "allsignupl";
    }

//    @RequestMapping(method = RequestMethod.GET, value = "/home")
//    public static String lea1der( ModelMap modelMap, HttpServletResponse response, HttpServletRequest request) {
//        return "homepage";
//    }
}
