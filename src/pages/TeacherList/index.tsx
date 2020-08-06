import React from "react";

import PageHeader from "../../components/PageHeader";

import "./styles.css";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Esse são os proffys disponíveis">
        <form id="search-teachers">
        <Select 
            name="subject"
            label="Matéria"
            options={[
              { value: 'Artes', label:'Artes' },
              { value: 'Biologia', label:'Biologia' },
              { value: 'Ciências', label:'Ciências' },
              { value: 'Matemática', label:'Matemática' },
              { value: 'Português', label:'Português' },
            ]}
          />
          <Select 
            name="week_day"
            label="Dia da semana"
            options={[
              { value: '0', label:'Domingo' },
              { value: '1', label:'Segunda' },
              { value: '2', label:'Terça' },
              { value: '3', label:'Quarta' },
              { value: '4', label:'Quinta' },
              { value: '5', label:'Sexta' },
              { value: '6', label:'Sábado' },
            ]}
          />
          <Input name="time" label="Horário" type="time"></Input>
        </form>
      </PageHeader>

      <main>
        <TeacherItem
          avatar="https://lh3.googleusercontent.com/ogw/ADGmqu8FUK1txo3adxz5V4rIgFJepLKocQmiPWDkB_Gg=s83-c-mo"
          name="José Luiz"
          subject="Programação"
          subtitle="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
          price={100}
          phone="5548999794989"
        />
      </main>
    </div>
  );
}

export default TeacherList;
