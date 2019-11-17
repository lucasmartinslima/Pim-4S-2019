package br.unip.ads.pim.service;

import java.util.List;

import br.unip.ads.pim.domain.Usuario;
import retrofit2.Call;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.POST;
import retrofit2.http.Path;
import retrofit2.http.Query;

public interface ApiService {

    @GET("/api/user/")
    Call<Usuario> logar(@Query("email") String user, @Query("pass") String pass);

    public static final Retrofit retrofit = new Retrofit.Builder()
                .baseUrl("http://192.168.0.106:5050/")
                .addConverterFactory(GsonConverterFactory.create())
                .build();


    @GET("/api/users")
    Call<List<Usuario>> listarUsuarios();
}
