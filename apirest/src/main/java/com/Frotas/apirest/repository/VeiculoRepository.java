package com.Frotas.apirest.repository;




import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.Frotas.apirest.models.Veiculo;

public interface VeiculoRepository extends JpaRepository<Veiculo, Long>{

	Veiculo findById(long id);

		@Query("FROM Veiculo v WHERE v.nome= :nome AND v.disponibilidade = :disponibilidade")
	Veiculo findByNomeAndDisponibilidade(String nome, int disponibilidade);
	
}
