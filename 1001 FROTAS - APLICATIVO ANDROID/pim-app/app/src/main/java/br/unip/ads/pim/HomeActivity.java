package br.unip.ads.pim;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.TextView;


import java.util.List;

import br.unip.ads.pim.domain.Usuario;
import br.unip.ads.pim.domain.Viagem;
import br.unip.ads.pim.service.ApiService;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class HomeActivity extends AppCompatActivity {

   // public static final String EXTRA_USUARIO = "HomeActivity.usuario";

    private Usuario usuarioLogado;
    private int i;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

       // usuarioLogado = Parcels.unwrap(getIntent().getParcelableExtra(EXTRA_USUARIO));

        final TextView tvSaudacao = findViewById(R.id.tvSaudacao);

        tvSaudacao.setText(String.format("Viagens"));

        carregarViagens();

    }


    public void carregarViagens() {

        final ApiService api = ApiService.retrofit.create(ApiService.class);

        final Call<List<Viagem>> call = api.viagens();

        final String[] Viagens;

        call.enqueue(new Callback<List<Viagem>>() {
            @Override
            public void onResponse(Call<List<Viagem>> call, Response<List<Viagem>> response) {
                if (response.isSuccessful()) {
                    final List<Viagem> viagem = response.body();

                    System.out.println(viagem.get(1).getCep());
                    //System.out.println(viagem.get(1).getViagemText());

                    ListView listaDeViagens = (ListView) findViewById(R.id.lista);

                    ArrayAdapter<Viagem> adapter = new ArrayAdapter<Viagem>(HomeActivity.this, android.R.layout.simple_list_item_1, viagem);

                    listaDeViagens.setAdapter(adapter);

                    for(i=0;i < viagem.size(); i++){
                      //  System.out.println(viagem.get(i).getViagemText());

                    }

                } else {
                    //  mostrarMensagem(ApiSingleton.get().getMensagemErro(response.errorBody()));

                }
            }

            @Override
            public void onFailure(Call<List<Viagem>> call, Throwable t) {
                String msgEr = String.format("Usuário/Senha inválidos! Tente novamente");

            }
        });
    }


}


