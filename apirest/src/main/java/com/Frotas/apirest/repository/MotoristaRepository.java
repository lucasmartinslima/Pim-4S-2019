package com.Frotas.apirest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Frotas.apirest.models.Motorista;

public interface MotoristaRepository extends JpaRepository<Motorista, Long>{

	Motorista findById(long id);
	
}
