package com.zosh.response;

public class AuthResponse {
	

	
	private boolean status;
	
	public AuthResponse() {
		// TODO Auto-generated constructor stub
	}

	public AuthResponse(String jwt, boolean status) {
		super();

		this.status = status;
	}



	public boolean getStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}
	
	

}
