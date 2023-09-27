import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Regulation() {
  const {locale} = useRouter();
  const [regText, set_regText] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch(`/locales/${locale}/regulation.json`);
      const json = await response.json();
      set_regText(json);
    })();
  }, [locale]);
  return (
    <div className="bg-[whitesmoke] lg:py-32 py-16 lg:px-24">
      <h1 className="lg:text-6xl text-4xl lg:text-left text-center text-[#fea116] tracking-wider font-thin">
        {locale === "en" ? "Regulation" : "콩쿠르 요강"}
      </h1>
      <h2 className="lg:text-2xl text-lg font-bold lg:text-left text-center">
        The Grand Prix will be awarded to the highest scorer in all categories
      </h2>
      <div className="lg:mx-0 mx-6">
        <div className="bg-white shadow-xl mt-10 py-5 px-10">
          <h1 className="lg:text-3xl text-xl font-thin text-[#fea116]">
            {locale === "en" ? "Award" : "시상"}
          </h1>
          <p className="mt-5 font-thin lg:text-lg text-sm">
            {locale === "en" ? "Grand Prix: 2000 US Dollars" : "$ 2000 (USD) 및 MK 챔버 오케스트라와의 협연비 부분 지원"}
          </p>
        </div>

        <div className="bg-white shadow-xl mt-10 py-5 px-10">
          <h1 className="lg:text-3xl font-thin text-[#fea116]">{locale === "en" ? "Section" : "참가부문"}</h1>
          <p className="mt-5 font-thin lg:text-lg text-sm">
            1. Piano (Piano Solo, Piano Concerto, Piano Duo, Piano Chamber
            Music)
          </p>
          <p className="mt-5 font-thin lg:text-lg text-sm">
            2. String and Wind Instruments - Solo (with or without piano
            accompaniment) - Except Ensemble & Chamber Music
          </p>
          <p className="mt-5 font-thin lg:text-lg text-sm">
            3. Singing - Solo (with or without piano accompaniment) - Except
            Ensemble & Chamber Music
          </p>
          <p className="mt-5 font-thin lg:text-lg text-sm">
            4. Chamber Music: Duo, Trio, Quartet, Quintet and Others - Except
            Piano Chamber Music
          </p>
        </div>

        <div className="bg-white shadow-xl mt-10 py-5 px-10">
          <h1 className="lg:text-3xl font-thin text-[#fea116]">{locale === "en" ? "Age Division" : "나이별 부문"}</h1>
          <p className="mt-5 font-thin lg:text-lg text-sm">
            There are different age categories in our competition, the age of
            participant must be calculated with this day.
            <br />
            {locale === "en" ? "(31st of Oct. 2024)" : "(2022년 10월 31일 기준)"}
          </p>
          <p className="mt-5 font-thin lg:text-lg text-sm">
            Group A {locale === "en" ? "(8-9 years)" : "(만 8-9세)"}<br />
            Group B {locale === "en" ? "(10-11 years)" : "(만 10-11세)"}<br />
            Group C {locale === "en" ? "(12-13 years)" : "(만 12-13세)"}<br />
            Group D {locale === "en" ? "(14-15 years)" : "(만 14-15세)"}<br />
            Group E {locale === "en" ? "(16-17 years)" : "(만 16-17세)"}<br />
            Group F {locale === "en" ? "(18-19 years)" : "(만 18-19세)"}<br />
            Group G {locale === "en" ? "(20-25 years)" : "(만 20-25세)"}<br />
            Group H {locale === "en" ? "(26-31 years)" : "(만 26-31세)"}<br />
            Group I {locale === "en" ? "(over 32 years)" : "(만 32세 이상)"}
          </p>
          <p className="mt-5 font-thin lg:text-lg text-sm">
            *In the case of Duo Section and Chamber Music Section, the average
            age of all participants determines the “Age division”.
          </p>
          <p className="mt-5 font-thin lg:text-lg text-sm">
            (It is mandatory to attach the proof of age from each participant in
            the application form.)
          </p>
        </div>

        <div className="bg-white shadow-xl mt-10 py-5 px-10">
          <h1 className="lg:text-3xl font-thin text-[#fea116]">
            Required Repertoire{locale === "en" ? "Section" : "참가부문"}
          </h1>
          <p className="mt-5 font-thin lg:text-lg text-sm">
            Free choice of 1 piece or several pieces{locale === "en" ? "Section" : "참가부문"}
          </p>
          <p className="mt-5 font-thin lg:text-lg text-sm">
            Group A : max. 6 min <br />
            Group B : max. 8 min <br />
            Group C : max. 10 min <br />
            Group D : max. 12 min <br />
            Group E : max. 15 min <br />
            Group F : max. 18 min <br />
            Group G : max. 20 min <br />
            Group H : max. 25 min <br />
            Group I : max. 30 min
          </p>
          <p className="mt-5 font-thin lg:text-lg text-sm">
            *Music composed by the performer is not allowed, only officially
            published works can be performed.
          </p>
          <p className="mt-5 font-thin lg:text-lg text-sm">
            *Piano Concerto Section : All age groups- one or two Movements
          </p>
          <p className="mt-5 font-thin lg:text-lg text-sm">
            *The recording must have been recorded after the 1st of December,
            2023
          </p>
        </div>

        <div className="bg-white shadow-xl mt-10 py-5 px-10">
          <h1 className="lg:text-3xl font-thin text-[#fea116]">
            {locale === "en" ? "Awards For Each Division" : "나이별 부문"}
          </h1>
          <h2 className="lg:text-xl font-thin text-[#fea116] mt-5">
            {locale === "en" ? "Announcement of the Result" : "참가부문"}
          </h2>
          <p className="mt-5 font-thin lg:text-lg text-sm">
            Notification on the homepage : December 1, 2024{locale === "en" ? "Section" : "참가부문"}
          </p>
          <p className="mt-5 font-thin lg:text-lg text-sm">
            Awards for each division{locale === "en" ? "Section" : "참가부문"}
          </p>
          <p className="mt-5 font-thin lg:text-lg text-sm">
            First Prize / Second Prize / Third Prize <br />
            These main prizes will be selected only by the judges
          </p>
          <h2 className="lg:text-xl font-thin text-[#fea116] mt-5">
            Netizen Special Prize
          </h2>
          <p className="mt-5 font-thin lg:text-lg text-sm">
            - To participant who received the most &apos;Like&apos; <br />
            (The competition will collect and post all participant’s videos on
            the following Link on the 16th of Nov. 2024. Vote counting is only
            valid on this Web address: https://nationalux.com/@GCLEF)
          </p>
          <p className="mt-5 font-thin lg:text-lg text-sm">
            - Counting period : From the 16th of Nov. to the 30th of Nov. 2024
          </p>
          <h2 className="lg:text-xl font-thin text-[#fea116] mt-5">
            Teacher’s Award{locale === "en" ? "Section" : "참가부문"}
          </h2>
          <p className="mt-5 font-thin lg:text-lg text-sm">
            The teacher of the Grand Prix Winner and the teacher who produced
            more than five Prize Winners will be awarded.
          </p>
        </div>
        <div className="bg-white shadow-xl mt-10 py-5 px-10">
          <h1 className="lg:text-3xl font-thin text-[#fea116]">Application{locale === "en" ? "Section" : "참가부문"}</h1>
          <h2 className="lg:text-xl font-thin text-[#fea116] mt-5">
            Application Deadline{locale === "en" ? "Section" : "참가부문"}
          </h2>
          <p className="mt-5 font-thin lg:text-lg text-sm">October 31, 2024{locale === "en" ? "Section" : "참가부문"}</p>
          <h2 className="lg:text-xl font-thin text-[#fea116] mt-5">
            Application Method{locale === "en" ? "Section" : "참가부문"}
          </h2>
          <p className="mt-5 font-thin lg:text-lg text-sm">
            Participants must submit{locale === "en" ? "Section" : "참가부문"}
          </p>
          <p className="mt-5 font-thin lg:text-lg text-sm">
            1. Fill out online Application Form and click the button “Submit”
            <br />
            (Write the youtube link address of participating video)
          </p>
          <p className="mt-5 font-thin lg:text-lg text-sm">
            2. Transfer the application fee to the following Paypal account.
            <br />
            * Piano Solo, Piano Concerto Section : 130 Euros <br />
            * Piano Duo Section : 160 Euros <br />
            * Piano Chamber Music (60 Euros from each member) <br />
            * String & Wind Instruments Section: 130 Euros <br />
            * Singing Section : 130 Euros
            <br />
            * Chamber Music Section : Duet (160 Euros) From Trio (60 Euros from
            each member)
          </p>
          <p className="mt-5 font-thin lg:text-lg text-sm">
            * Paypal: kmat0@nationalux.org <br />
            • It must be transfered with the name of the participant. (Mandatory)
          </p>
        </div>
        <div className="bg-yellow-50 shadow-xl mt-10 py-10 px-10 space-y-5 lg:text-base text-sm">
          <h2 className="">
            * Category Piano, String and Wind Instruments, Chamber Music: The video should be recorded with a fixed camera where the participant’s hand is visible.
          </h2>
          <h2>
            * Category Vocal Section: The video should be recorded with a fixed camera where the participant’s face is visible.
          </h2>
          <h2>
            * The recording must have been recorded after the 1st of December, 2023.
          </h2>
          <h2>
            * Incomplete applications including failure to pay application fee will result in disqualification.
          </h2>
          <h2>
            * All documents will not be returned and the application fee is not refundable.
          </h2>
          <h2>
            * The judges’ decision is final and unappealable. The scores of the jury will not be provided and published.
          </h2>
          <h2>
            * Jury may not vote to their own pupils.
          </h2>
          <h2>
            * Certificate of the prize will be sent only by an e-mail, no later than the 10th of Dec. 2024.
          </h2>
          <h2>
            * Nationalux has the right to post and use the videos of participants. Contestants may not claim competition and Nationalux for their profits and remuneration.
          </h2>
          <h2>
            * Result of the competition will be announced on the 1st of Dec. 2024 on the homepage.
          </h2>
        </div>
      </div>
    </div>
  );
}
