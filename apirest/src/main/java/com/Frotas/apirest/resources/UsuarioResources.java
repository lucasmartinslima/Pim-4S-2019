package com.Frotas.apirest.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Frotas.apirest.models.Usuario;
import com.Frotas.apirest.models.Veiculo;
import com.Frotas.apirest.repository.UsuarioRepository;

@RestController
@RequestMapping(value="/api")
public class UsuarioResources {

	
	@Autowired
	UsuarioRepository usuarioRepository;

	// Pega por email e senha
	@CrossOrigin
	@GetMapping("/user/") 
	public Usuario login(@RequestParam(value="email")String email, @RequestParam(value="pass")String senha){
		
        return usuarioRepository.findByEmailAndSenha(email, senha);  
	}	
	@CrossOrigin
	@GetMapping("/users") 
	public List<Usuario> login(){
		
        return usuarioRepository.findAll();  
	}

	
	@CrossOrigin 
	@PostMapping("/login")
	public Usuario loginUser(@RequestBody Usuario user) {
		return usuarioRepository.save(user);
	}
	
	
	
}
