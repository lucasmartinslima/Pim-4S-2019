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

import com.Frotas.apirest.repository.ViagemRepository;
import com.Frotas.apirest.models.Veiculo;
import com.Frotas.apirest.models.Viagem;


@RestController
@RequestMapping(value="/api")
public class ViagemResources {

	@Autowired
	ViagemRepository viagemRepository;

	//Listar todos os produtos em JSON -- metodo GET 
	@CrossOrigin // LIBERA O ACESSO
	@GetMapping("/viagens")
	public List<Viagem> listarViagens(){
		return viagemRepository.findAll();
	}
	
	//Listar apenas 1 viagem -- metodo GET

	@CrossOrigin 
	@GetMapping("/viagens/{id}")
	public Viagem listarViagemUnico(@PathVariable(value="id")long id){
		return viagemRepository.findById(id);
	}
	
	
	//REGISTRA UM VIAGEM -- metodo post.
	@CrossOrigin 
	@PostMapping("/viagem")
	public Viagem salvaViagem(@RequestBody Viagem viagem) {
		return viagemRepository.save(viagem);
	}
	
	//DELETA VIAGEM -- metodo DELETE

	@CrossOrigin 
	@DeleteMapping("/viagem")
	public void deletaViagem(@RequestBody Viagem viagem) {
		viagemRepository.delete(viagem);
	}
	
	//ATUALIZAR VIAGEM  -- metodo PUT

	@CrossOrigin 
	@PutMapping("/viagem")
	public Viagem atualizaViagem(@RequestBody Viagem viagem) {
	   return viagemRepository.save(viagem);
	}
	

	@CrossOrigin 
	@GetMapping("/viagens/status")
	public List<Viagem> listarViagensAberto(@RequestParam(value="cep")int cep,@RequestParam(value="disp")String disp){
		return  viagemRepository.findByCepAndDisponibilidade(cep,disp);
	}
	
	
	
}
