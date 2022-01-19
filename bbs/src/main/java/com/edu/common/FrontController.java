package com.edu.common;

import java.io.IOException; 
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.edu.web.BulletinAddController;
import com.edu.web.BulletinDeleteController;
import com.edu.web.BulletinFormController;
import com.edu.web.BulletinListController;
import com.edu.web.BulletinSelectController;
import com.edu.web.BulletinUpdateController;
import com.edu.web.MainController;
import com.edu.web.NoticeAddController;
import com.edu.web.NoticeListController;
import com.edu.web.noticeFormController;



public class FrontController extends HttpServlet { //서블릿이 될려면 HttpServlet을 상속받아야된다
   Map<String, Controller> map = null;
   
   @Override
   public void init(ServletConfig config) throws ServletException {
      map = new HashMap<String , Controller>(); //Hash<String,Controller> map=new HashMap<>();
      
      //url패턴 ,  컨트롤러
      map.put("/main.do", new MainController());
      
      //게시판 컨트롤
      map.put("/bulletinList.do", new BulletinListController());
      map.put("/bulletinForm.do", new BulletinFormController());
      map.put("/bulletinAdd.do", new BulletinAddController());
      map.put("/bulletinSelect.do", new BulletinSelectController());
      map.put("/bulletinUpdate.do", new BulletinUpdateController());
      map.put("/bulletinDelete.do", new BulletinDeleteController());
      
      // 공지사항 컨트롤
      map.put("/noticeList.do", new NoticeListController());
      map.put("/noticeForm.do", new noticeFormController());
      map.put("/noticeAdd.do", new NoticeAddController());
   }
   @Override
   protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
      
      req.setCharacterEncoding("utf-8");//요청정보 한글처리
      resp.setCharacterEncoding("utf-8"); //응답정보 한글
      
      String uri = req.getRequestURI(); // equ2/memberList.do 요청정보에서 uri정보를 읽어오기
      String context= req.getContextPath();//edu2 정보 가져오기
      String path = uri.substring(context.length()); //uri값에서 /memberList.do
      
      Controller control = map.get(path); //get으로 키값 넣기
      control.execute(req, resp);
   }
   

}