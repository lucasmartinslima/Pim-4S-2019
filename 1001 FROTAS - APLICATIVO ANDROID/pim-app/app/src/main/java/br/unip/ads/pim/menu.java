package br.unip.ads.pim;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;


public class menu extends AppCompatActivity {

    public static final String EXTRA_USUARIO = "menu.usuario";

    private Button btnViagens;
    private Button btnMotoristas;
    private Button btnVeiculos;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_menu);

        btnViagens = findViewById(R.id.viagens);
        btnMotoristas = findViewById(R.id.motoristas);
        btnVeiculos = findViewById(R.id.veiculos);

        btnViagens.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                redirecionarParaViagens();
            }
        });


        btnVeiculos.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                redirecionarParaVeiculos();
            }
        });

        btnMotoristas.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                redirecionarParaMotoristas();
            }
        });
    }

    private void redirecionarParaViagens() {
        Intent home = new Intent(this, HomeActivity.class);
        startActivity(home);
    }

    private void redirecionarParaVeiculos() {
        Intent home = new Intent(this, Veiculos.class);
        startActivity(home);
    }

    private void redirecionarParaMotoristas() {
        Intent home = new Intent(this, Motoristas.class);
        startActivity(home);
    }
}
