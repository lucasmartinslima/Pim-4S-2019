package com.Frotas.apirest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Frotas.apirest.models.Viagem;

public interface ViagemRepository extends JpaRepository<Viagem, Long>{

	Viagem findById(long id);


}
