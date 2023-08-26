import Letter from "@/components/ShowCardList";
import Header from "@/layout/Header";

function ShowCardList() {
  return (
    <>
      <Header text="편지가 이만큼 도착했어요!" fillColor={"#0D77D8"} />
      <div className="flex flex-row gap-16 justify-center items-center my-10">
        <Letter text="피노키완" />
        <Letter />
        <Letter />
        <Letter />
      </div>
    </>
  );
}

export default ShowCardList;
