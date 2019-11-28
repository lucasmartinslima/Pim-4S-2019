package br.unip.ads.pim.service;

import java.util.List;

import br.unip.ads.pim.domain.Motorista;
import br.unip.ads.pim.domain.Usuario;
import br.unip.ads.pim.domain.Veiculo;
import br.unip.ads.pim.domain.Viagem;
import retrofit2.Call;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;
import retrofit2.http.GET;
import retrofit2.http.Query;

public interface ApiService {

    @GET("/api/user/")
    Call<Usuario> logar(@Query("email") String user, @Query("pass") String pass);

    @GET("/api/viagens/")
    Call<List<Viagem>> viagens();

    @GET("/api/veiculos")
    Call<List<Veiculo>> veiculos();

    @GET("/api/motoristas")
    Call<List<Motorista>> motoristas();

    public static final Retrofit retrofit = new Retrofit.Builder()
                .baseUrl("http://192.168.0.105:5050/")
                .addConverterFactory(GsonConverterFactory.create())
                .build();


    @GET("/api/users")
    Call<List<Usuario>> listarUsuarios();
}
