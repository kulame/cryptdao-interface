import Info from "@/components/Info";
import ProposalHeader from "../Proposal";
import Proposals from "../Proposal/list";

export default function Body() {
  return (
    <>
      <div className="flex-auto px-0 md:px-4 mx-auto mt-4 max-w-[1012px]">
        <div className="hidden float-left w-1/4 lg:block">
          <Info />
        </div>
        <div className="float-right w-full pl-0 lg:pl-5 lg:w-3/4">
          <ProposalHeader />
          <Proposals />
        </div>
      </div>
    </>
  );
}
