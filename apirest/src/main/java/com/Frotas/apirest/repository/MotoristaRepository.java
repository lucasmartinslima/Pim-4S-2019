package com.Frotas.apirest.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.Frotas.apirest.models.Motorista;

public interface MotoristaRepository extends JpaRepository<Motorista, Long>{

	Motorista findById(long id);
	
	
	 @Query("FROM Motorista v WHERE v.nome= :nome AND v.disponibilidade = :disponibilidade")
	 Motorista findByNomeAndDisponibilidade(String nome, boolean disponibilidade);
	    
	    @Query("FROM Motorista v WHERE v.nome like :nome% OR v.cpf like :cpf% AND v.disponibilidade = :disponibilidade")
	    List<Motorista> findByNomeAndCpf(String nome, String cpf, boolean disponibilidade);
		
	    @Query("FROM Motorista v WHERE v.disponibilidade = :disponibilidade")
	    List<Motorista> findByDisp(boolean disponibilidade);
	    
	    
	    @Query("FROM Motorista v WHERE v.nome like :nome% OR v.cpf like :cpf%")
	    List<Motorista> findByNomeAndPlaca(String nome, String cpf);
	
}
