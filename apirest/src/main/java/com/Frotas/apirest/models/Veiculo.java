package com.Frotas.apirest.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.springframework.stereotype.Indexed;

@Entity
@Table(name="TB_VEICULO")
public class Veiculo implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
@NotNull
private String nome;
private int tipo;    
private String placa;
private String cor;
private int disponibilidade;

public int getDisponibilidade() {
	return disponibilidade;
}

public void setDisponibilidade(int disponibilidade) {
	this.disponibilidade = disponibilidade;
}

public int getTipo() {
	return tipo;
}

public void setTipo(int tipo) {
	this.tipo = tipo;
}

public String getCor() {
	return cor;
}

public void setCor(String cor) {
	this.cor = cor;
}



	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getPlaca() {
		return placa;
	}

	public void setPlaca(String placa) {
		this.placa = placa;
	}

	
}
