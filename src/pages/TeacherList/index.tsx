import React from "react";

import PageHeader from "../../components/PageHeader";

import "./styles.css";
import TeacherItem from "../../components/TeacherItem";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Esse são os proffys disponíveis">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Horário</label>
            <input type="text" id="time" />
          </div>
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
