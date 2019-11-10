package com.Frotas.apirest.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="TB_VIAGEM")
public class Viagem implements Serializable{

private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	private String statusViagem;
	private int cep;
	
	private int diaInicio;
	private int mesInicio;
	private int anoInicio;
	
	private int diaFim;
	private int mesFim;
	private int anoFim;

	private int idVeiculo;
	private int idMotorista;
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getStatusViagem() {
		return statusViagem;
	}
	public void setStatusViagem(String statusViagem) {
		this.statusViagem = statusViagem;
	}
	public int getCep() {
		return cep;
	}
	public void setCep(int cep) {
		this.cep = cep;
	}
	public int getDiaInicio() {
		return diaInicio;
	}
	public void setDiaInicio(int diaInicio) {
		this.diaInicio = diaInicio;
	}
	public int getMesInicio() {
		return mesInicio;
	}
	public void setMesInicio(int mesInicio) {
		this.mesInicio = mesInicio;
	}
	public int getAnoInicio() {
		return anoInicio;
	}
	public void setAnoInicio(int anoInicio) {
		this.anoInicio = anoInicio;
	}
	public int getDiaFim() {
		return diaFim;
	}
	public void setDiaFim(int diaFim) {
		this.diaFim = diaFim;
	}
	public int getMesFim() {
		return mesFim;
	}
	public void setMesFim(int mesFim) {
		this.mesFim = mesFim;
	}
	public int getAnoFim() {
		return anoFim;
	}
	public void setAnoFim(int anoFim) {
		this.anoFim = anoFim;
	}
	public int getIdVeiculo() {
		return idVeiculo;
	}
	public void setIdVeiculo(int idVeiculo) {
		this.idVeiculo = idVeiculo;
	}
	public int getIdMotorista() {
		return idMotorista;
	}
	public void setIdMotorista(int idMotorista) {
		this.idMotorista = idMotorista;
	}
	
	
	
	
	
	
	
	
	
	
	
	
}
