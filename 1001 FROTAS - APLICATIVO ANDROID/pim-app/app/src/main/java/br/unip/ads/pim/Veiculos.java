package br.unip.ads.pim;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.TextView;

import java.util.List;

import br.unip.ads.pim.domain.Veiculo;
import br.unip.ads.pim.domain.Viagem;
import br.unip.ads.pim.service.ApiService;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class Veiculos extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_veiculos);

        final TextView tvSaudacao = findViewById(R.id.tvSaudacao);

        tvSaudacao.setText(String.format("Veículos"));

        carregarVeiculos();

    }

    public void carregarVeiculos() {

        final ApiService api = ApiService.retrofit.create(ApiService.class);

        final Call<List<Veiculo>> call = api.veiculos();

        final String[] Viagens;

        call.enqueue(new Callback<List<Veiculo>>() {
            @Override
            public void onResponse(Call<List<Veiculo>> call, Response<List<Veiculo>> response) {
                if (response.isSuccessful()) {
                    final List<Veiculo> veiculo = response.body();


                    //System.out.println(viagem.get(1).getViagemText());

                    ListView listaDeViagens = (ListView) findViewById(R.id.lista);

                    ArrayAdapter<Veiculo> adapter = new ArrayAdapter<Veiculo>(Veiculos.this, android.R.layout.simple_list_item_1, veiculo);

                    listaDeViagens.setAdapter(adapter);



                } else {
                    //  mostrarMensagem(ApiSingleton.get().getMensagemErro(response.errorBody()));

                }
            }

            @Override
            public void onFailure(Call<List<Veiculo>> call, Throwable t) {
                String msgEr = String.format("Usuário/Senha inválidos! Tente novamente");

            }
        });
    }
}
