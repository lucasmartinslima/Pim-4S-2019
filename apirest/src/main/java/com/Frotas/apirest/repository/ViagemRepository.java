package com.Frotas.apirest.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.Frotas.apirest.models.Veiculo;
import com.Frotas.apirest.models.Viagem;

public interface ViagemRepository extends JpaRepository<Viagem, Long>{

	Viagem findById(long id);

	
    @Query("FROM Viagem v WHERE v.cep like :cep% OR v.statusViagem like :status%")
    List<Viagem> findByCepAndDisponibilidade(int cep, String status);
    
  

}
