package br.unip.ads.pim.domain;

public class Motorista {


    private long id;

    private String nome;
    private String cpf;
    private String cnh;
    private String venc_cnh;
    private String cel;
    private int disponibilidade;


    private String texto;

    @Override public String toString(){

        final int status = this.getDisponibilidade();

        if(status == 1) {
            texto = ""+this.getNome()+"\nDisponível \nCPF: "+this.getCpf()+"\nCNH: "+this.getCnh();
        }else{
            texto = ""+this.getNome()+"\nIndisponível \nCPF: "+this.getCpf()+"\nCNH: "+this.getCnh();
        }


        return texto;
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
    public String getCpf() {
        return cpf;
    }
    public void setCpf(String cpf) {
        this.cpf = cpf;
    }
    public String getCnh() {
        return cnh;
    }
    public void setCnh(String cnh) {
        this.cnh = cnh;
    }
    public String getVenc_cnh() {
        return venc_cnh;
    }
    public void setVenc_cnh(String venc_cnh) {
        this.venc_cnh = venc_cnh;
    }
    public String getCel() {
        return cel;
    }
    public void setCel(String cel) {
        this.cel = cel;
    }
    public int getDisponibilidade() {
        return disponibilidade;
    }
    public void setDisponibilidade(int disponibilidade) {
        this.disponibilidade = disponibilidade;
    }




}
