package com.Frotas.apirest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.Frotas.apirest.models.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long>{

	
	@Query("FROM Usuario v WHERE v.email= :email AND v.senha = :senha")
	Usuario findByEmailAndSenha(String email, String senha);
	
	
}
