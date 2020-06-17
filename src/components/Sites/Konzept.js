import React, { useEffect } from "react";

const Sprachkita = ({ changeBanner }) => {
  useEffect(() => {
    changeBanner("Unser Konzept", "var(--mblue-color)");
    // eslint-disable-next-line
  }, []);

  return (
    <div className='container'>
      <h2>Wir lieben Vielfalt.</h2>
      <p>
        In der Kita und in der Welt. In den Herzen und in den Köpfen. Auf dem
        Teller und im Glas.
      </p>
      <h2>Wir leben Vielfalt.</h2>
      <p>
        Sie prägt unseren pädagogischen Alltag: Die Kinder wählen täglich aus
        mehreren Projekten aus, was sie interessiert und ihnen Spaß macht. Sie
        entscheiden, wo und mit wem sie ihren Tag verbringen wollen. Gemeinsam
        erforschen wir, was unser Leben schön macht: Wir bewegen uns in der
        Natur, laufen durch die Stadt; wir besuchen unsere Gärten und fahren in
        den Wald. Wir gehen in die Turnhalle und ins Schwimmbad. Wir
        verständigen uns in vielen Sprachen. Wir kümmern uns um unsere Tiere und
        unsere Pflanzen. Wir singen, experimentieren, malen, basteln, toben und
        ruhen uns aus.
      </p>
      <h2>Vielfalt ist unser Programm.</h2>
      <p>
        Die Kita Mandala eröffnete im Juli 2000 und ist interkulturell
        ausgerichtet – in etwa 40 Prozent unserer Familien ist die Muttersprache
        nicht deutsch. Wir arbeiten demokratisch und religionentolerant. So ist
        für unsere Kinder der Umgang mit Menschen anderer Herkunft, Hautfarbe,
        Religion selbstverständlich. Wir binden die Familien der Kinder in
        unsere Arbeit ein, sie begleiten uns bei Ausflügen, gestalten einen
        Morgenkreis/ein Nachmittagsangebot oder sprechen mit uns in einer
        anderen Sprache als gewohnt. Gleiches gilt für das Personal: Wir
        beschäftigen pädagogische Fachkräfte aus der Ukraine und Spanien,
        haben/hatten Freiwillige aus dem Jemen, Syrien, Frankreich, Südkorea …
        Die Kinder erleben andere Sprachen in individueller Authentizität und
        erfahren erste Grundlagen von Interkulturalität. Wir arbeiten als
        Spielplatz-Paten und in verschiedenen Netzwerken. Partner, mit denen wir
        im Quartier zusammenarbeiten, sind derzeit u.a. die Freiwilligenagentur,
        das Kompetenzzentrum für geschlechtergerechte Kinder- und Jugendhilfe,
        die Schachzwerge, das Telemannzentrum, der „Dialog der Generationen“;
        für einzelne Projekte bilden sich auch temporäre Netzwerke aus. Das
        Mandala – Team ist auch sonst bunt: männlich und weiblich, jünger und
        älter, mit pädagogischem Abschluss, mit anderer Ausbildung oder keiner,
        mit verschiedenen Vorstellungen vom Leben. Die Kinder beschäftigen sich
        mit Medien und Naturwissenschaften, mit mathematischen Fragen und Kunst,
        mit Musik, Sprachen und Schach. Die Werkstatt lockt zum Bauen und der
        Bewegungsraum zum Klettern. Das Atelier bietet eine Fülle von kreativen
        Möglichkeiten – und die Bibliothek eröffnet literarische Welten. Wir
        bereiten mit den Kindern täglich frische Speisen aus eigener Küche zu.
        Wir leben im Haus gemeinsam mit Fischen und Bartagamen, Kaninchen und
        drei Kita-Hunden; wir achten auf ihre Bedürfnisse und helfen bei
        Fütterung und Pflege.
      </p>
      <h2>Wir schützen Vielfalt.</h2>
      <p>
        Wir betreiben drei Pachtgärten, die wir gemeinsam mit Eltern urbar
        gemacht haben. Damit wir wissen, was wir essen und welche Arbeit dafür
        notwendig ist. Damit wir schätzen, was wächst. Damit wir schützen, was
        uns und andere Lebewesen nährt.{" "}
      </p>
      <h2>Damit Vielfalt erhalten bleibt.</h2>
    </div>
  );
};

export default Sprachkita;
