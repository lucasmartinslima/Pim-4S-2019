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

import com.Frotas.apirest.repository.MotoristaRepository;
import com.Frotas.apirest.models.Motorista;
import com.Frotas.apirest.models.Veiculo;


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
	@CrossOrigin
	@GetMapping("/motoristas/{id}")
	public Motorista listarMotoristaUnico(@PathVariable(value="id")long id){
		return motoristaRepository.findById(id);
	}
	
	
	//REGISTRA UM MOTORISTA -- metodo post.
	@CrossOrigin 
	@PostMapping("/motorista")
    public	Motorista salvaVeiculo(@RequestBody Motorista motorista) {
		return motoristaRepository.save(motorista);
	}
	
	//DELETA MOTORISTA -- metodo DELETE
	@CrossOrigin
	@DeleteMapping("/motorista")
	public void deletaVeiculo(@RequestBody Motorista motorista) {
		motoristaRepository.delete(motorista);
	}
	
	//ATUALIZAR MOTORISTA -- metodo PUT
	@CrossOrigin
	@PutMapping("/motorista")
	public Motorista atualizaVeiculo(@RequestBody Motorista motorista) {
	   return motoristaRepository.save(motorista);
	}
	
	
	
	
	
	
	
	// Pega por nome do motorista
		@CrossOrigin
		@GetMapping("/motorista/") 
		public Motorista motoristaUny(@RequestParam(value="nome")String nome, @RequestParam(value="disp")boolean disponibilidade){
			return motoristaRepository.findByNomeAndDisponibilidade(nome, disponibilidade);  
		}
	
	// Pega por email e senha
	@CrossOrigin
	@GetMapping("/motoristas/") 
	public List<Motorista> findByNomeAndCpf(@RequestParam(value="nome")String nome, @RequestParam(value="cpf")String cpf, @RequestParam(value="disp")boolean disponibilidade){
        return motoristaRepository.findByNomeAndCpf(nome, cpf, disponibilidade);  
	}	
	
	@CrossOrigin
	@GetMapping("/motoristas/disp") 
	public List<Motorista> findByDisp(@RequestParam(value="disp")boolean disponibilidade){
        return motoristaRepository.findByDisp(disponibilidade);  
	}	
	
	@CrossOrigin
	@GetMapping("/motoristas/nomeCpf") 
	public List<Motorista> findByNome(@RequestParam(value="nome")String nome,@RequestParam(value="cpf")String cpf){
        return motoristaRepository.findByNomeAndPlaca(nome, cpf);  
	}	
	
	
	
}