package com.edu.serviceImpl;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.edu.common.DAO;
import com.edu.service.NoticeService;
import com.edu.vo.NoticeVO;

public class NoticeDAO extends DAO implements NoticeService{

	@Override
	public List<NoticeVO> selectList() {
		connect();
		String sql = "select * from notice order by 1";
		List<NoticeVO> list = new ArrayList<>();
		
	  try {
		psmt = conn.prepareStatement(sql);
		rs = psmt.executeQuery();
		while(rs.next()) {
			NoticeVO notice = new NoticeVO();
			notice.setNtcId(rs.getInt("notice_id"));
			notice.setNtcTitle(rs.getNString("notice_title"));
			notice.setNtcContent(rs.getString("notice_content"));
			notice.setNtcWdate(rs.getString("notice_wdate"));
			notice.setNtcHit(rs.getInt("notice_hit"));
			
			list.add(notice);
			
		}
	} catch (SQLException e) {	
		e.printStackTrace();
		
	}finally {
		disconnect();
	}
	 return list; 
}
		
	@Override
	public NoticeVO selectOne(int ntcId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public NoticeVO insert(NoticeVO vo) {
		connect();
		String sql1 = "select notice_seq.nextval from dual";
		String sql2 = "INSERT INTO notice\r\n"
					+ " VALUES(?,?,?,sysdate,0)";
		
		try {
			psmt = conn.prepareStatement(sql1);
			rs = psmt.executeQuery();
			int seq = 0;
			if(rs.next()) {
				seq = rs.getInt(1);
			}
			
			psmt = conn.prepareStatement(sql2);
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return null;
	}

	@Override
	public NoticeVO update(NoticeVO vo) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int delete(int bbsId) {
		// TODO Auto-generated method stub
		return 0;
	}

}
