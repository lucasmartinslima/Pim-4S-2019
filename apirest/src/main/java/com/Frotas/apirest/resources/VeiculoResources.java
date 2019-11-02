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

import com.Frotas.apirest.repository.VeiculoRepository;
import com.Frotas.apirest.repository.ViagemRepository;
import com.Frotas.apirest.models.Veiculo;
import com.Frotas.apirest.models.Viagem;


@RestController
@RequestMapping(value="/api")
public class VeiculoResources {

	@Autowired
	VeiculoRepository veiculoRepository;
	@Autowired
	ViagemRepository viagemRepository;

	//Listar todos os produtos em JSON -- metodo GET 
	@CrossOrigin // LIBERA O ACESSO
	@GetMapping("/veiculos")
	public List<Veiculo> listarVeiculos(){
		return veiculoRepository.findAll();
	}
	//Listar todos os produtos em JSON -- metodo GET 
	/*
	 * @CrossOrigin // LIBERA O ACESSO
	@GetMapping("/veiculos/disponiveis")
	public List<Veiculo> listarVeiculosDisponiveis(){
		List<Veiculo> veiculos = veiculoRepository.findAll();
		for (Veiculo veiculo : veiculos) {
			List<Viagem> viagens = viagemRepository.buscarViagemsPorVeiculos(veiculo.getId());
			veiculo.setDisponibilidade(viagens.size() > 0 ? 0 : 1);
		}
		return veiculos;
	}
	*/
	
	//Listar apenas 1 veiculo -- metodo GET
	@CrossOrigin
	@GetMapping("/veiculos/{id}")
	public Veiculo listarVeiculoUnico(@PathVariable(value="id")long id){
		return veiculoRepository.findById(id);
	}
	
	
	//REGISTRA UM VEICULO -- metodo post.
	@CrossOrigin 
	@PostMapping("/veiculo")
	public Veiculo salvaVeiculo(@RequestBody Veiculo veiculo) {
		return veiculoRepository.save(veiculo);
	}
	
	//DELETA VEICULO -- metodo DELETE
	@CrossOrigin
	@DeleteMapping("/veiculo")
	public void deletaVeiculo(@RequestBody Veiculo veiculo) {
	   veiculoRepository.delete(veiculo);
	}
	
	//ATUALIZAR VEICULO -- metodo PUT
	@CrossOrigin
	@PutMapping("/veiculo")
	public Veiculo atualizaVeiculo(@RequestBody Veiculo veiculo) {
	   return veiculoRepository.save(veiculo);
	}
	
	// Pega por nome do veiculo
	@CrossOrigin
	@GetMapping("/veiculo/") 
	public Veiculo veiculoUny(@RequestParam(value="nome")String nome, @RequestParam(value="disp")int disponibilidade){
		return veiculoRepository.findByNomeAndDisponibilidade(nome, disponibilidade);  
	}
	
}
