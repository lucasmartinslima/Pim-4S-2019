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
import org.springframework.web.bind.annotation.RestController;

import com.Frotas.apirest.repository.MotoristaRepository;
import com.Frotas.apirest.models.Motorista;


@RestController
@RequestMapping(value="/api")
public class MotoristaResources {

	@Autowired
	MotoristaRepository motoristaRepository;

	//Listar todos os produtos em JSON -- metodo GET 
	@CrossOrigin // LIBERA O ACESSO
	@GetMapping("/motoristas")
	public List<Motorista> listarMotorista(){
		return motoristaRepository.findAll();
	}
	
	//Listar apenas 1 motorista -- metodo GET
	@GetMapping("/motoristas/{id}")
	public Motorista listarMotoristaUnico(@PathVariable(value="id")long id){
		return motoristaRepository.findById(id);
	}
	
	
	//REGISTRA UM MOTORISTA -- metodo post.
	@CrossOrigin 
	@PostMapping("/motorista")
public 	Motorista salvaVeiculo(@RequestBody Motorista motorista) {
		return motoristaRepository.save(motorista);
	}
	
	//DELETA MOTORISTA -- metodo DELETE
	@DeleteMapping("/motorista")
	public void deletaVeiculo(@RequestBody Motorista motorista) {
		motoristaRepository.delete(motorista);
	}
	
	//ATUALIZAR MOTORISTA -- metodo PUT
	@PutMapping("/motorista")
	public Motorista atualizaVeiculo(@RequestBody Motorista motorista) {
	   return motoristaRepository.save(motorista);
	}
	
}