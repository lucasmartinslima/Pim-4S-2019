package com.Frotas.apirest.repository;




import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.Frotas.apirest.models.Usuario;
import com.Frotas.apirest.models.Veiculo;

public interface VeiculoRepository extends JpaRepository<Veiculo, Long>{

	Veiculo findById(long id);

    @Query("FROM Veiculo v WHERE v.nome like :nome% AND v.disponibilidade = :disponibilidade")
	Veiculo findByNomeAndDisponibilidade(String nome, int disponibilidade);
    
    @Query("FROM Veiculo v WHERE v.nome like :nome% OR v.placa like :placa% AND v.disponibilidade = :disponibilidade")
    List<Veiculo> findByNomeAndPlaca(String nome, String placa, int disponibilidade);
	
    @Query("FROM Veiculo v WHERE v.disponibilidade = :disponibilidade")
    List<Veiculo> findByDisp(int disponibilidade);
    
    
    @Query("FROM Veiculo v WHERE v.nome like :nome% OR v.placa like :placa%")
    List<Veiculo> findByNomeAndPlaca(String nome, String placa);
    
}
