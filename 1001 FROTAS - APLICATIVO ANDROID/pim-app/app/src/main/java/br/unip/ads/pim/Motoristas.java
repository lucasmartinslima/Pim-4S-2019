package br.unip.ads.pim;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.TextView;

import java.util.List;

import br.unip.ads.pim.domain.Motorista;

import br.unip.ads.pim.service.ApiService;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class Motoristas extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_motoristas);

        final TextView tvSaudacao = findViewById(R.id.tvSaudacao);

        tvSaudacao.setText(String.format("Motoristas"));

        carregarVeiculos();
    }

    public void carregarVeiculos() {

        final ApiService api = ApiService.retrofit.create(ApiService.class);

        final Call<List<Motorista>> call = api.motoristas();

        final String[] Viagens;

        call.enqueue(new Callback<List<Motorista>>() {
            @Override
            public void onResponse(Call<List<Motorista>> call, Response<List<Motorista>> response) {
                if (response.isSuccessful()) {
                    final List<Motorista> motorista = response.body();


                    //System.out.println(viagem.get(1).getViagemText());

                    ListView listaDeViagens = (ListView) findViewById(R.id.lista);

                    ArrayAdapter<Motorista> adapter = new ArrayAdapter<Motorista>(Motoristas.this, android.R.layout.simple_list_item_1, motorista);

                    listaDeViagens.setAdapter(adapter);



                } else {
                    //  mostrarMensagem(ApiSingleton.get().getMensagemErro(response.errorBody()));

                }
            }

            @Override
            public void onFailure(Call<List<Motorista>> call, Throwable t) {
                String msgEr = String.format("Usuário/Senha inválidos! Tente novamente");

            }
        });
    }


}
