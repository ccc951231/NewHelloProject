package com.edu.serviceImpl;

import java.util.List;

import com.edu.vo.BulletinVO;

public interface BulletinService {
	// 기능정의만..
	public List<BulletinVO> selectList();
	public BulletinVO selectOne(int bbsId);
	public BulletinVO insert(BulletinVO vo);
	public BulletinVO update(BulletinVO vo);
	public int delete(int bbsId);
	
}
