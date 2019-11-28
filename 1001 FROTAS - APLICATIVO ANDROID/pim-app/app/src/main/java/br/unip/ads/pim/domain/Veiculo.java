package br.unip.ads.pim.domain;

public class Veiculo {

    private long id;
    private String nome;
    private int tipo;
    private String placa;
    private String cor;
    private int disponibilidade;

    private String texto;

    @Override public String toString(){

        final int status = this.getDisponibilidade();

        if(status == 1){
            texto = " "+this.getNome()+"\n Disponível \n Placa: "+this.getPlaca()+"\n Cor: "+ this.getCor();
        }else{
            texto = " "+this.getNome()+"\n Indisponível \n Placa: "+this.getPlaca()+"\n Cor: "+ this.getCor();
        }


        return texto;
    }


    public int getDisponibilidade() {
        return disponibilidade;
    }

    public void setDisponibilidade(int disponibilidade) {
        this.disponibilidade = disponibilidade;
    }

    public int getTipo() {
        return tipo;
    }

    public void setTipo(int tipo) {
        this.tipo = tipo;
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }



    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getPlaca() {
        return placa;
    }

    public void setPlaca(String placa) {
        this.placa = placa;
    }


}
