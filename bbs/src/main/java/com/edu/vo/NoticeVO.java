package com.edu.vo;

public class NoticeVO {
	private int ntcId;
	private String ntcTitle;
	private String ntcContent;
	private String ntcWdate;	
	private int ntcHit;
	
	public int getNtcId() {
		return ntcId;
	}
	public void setNtcId(int ntcId) {
		this.ntcId = ntcId;
	}
	public String getNtcTitle() {
		return ntcTitle;
	}
	public void setNtcTitle(String ntcTitle) {
		this.ntcTitle = ntcTitle;
	}
	public String getNtcContent() {
		return ntcContent;
	}
	public void setNtcContent(String ntcContent) {
		this.ntcContent = ntcContent;
	}
	public String getNtcWdate() {
		return ntcWdate;
	}
	public void setNtcWdate(String ntcWdate) {
		this.ntcWdate = ntcWdate;
	}
	public int getNtcHit() {
		return ntcHit;
	}
	public void setNtcHit(int ntcHit) {
		this.ntcHit = ntcHit;
	}
	@Override
	public String toString() {
		return "NoticeVO [ntcId=" + ntcId + ", ntcTitle=" + ntcTitle + ", ntcContent=" + ntcContent + ", ntcWdate="
				+ ntcWdate + ", ntcHit=" + ntcHit + "]";
	}
}
