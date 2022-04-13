import Ch01 from "./chapter01/Statement";
import invoice from "./chapter01/invoices.json";
import plays from "./chapter01/plays.json";

const Refactoring = () => {

    return (
      <div>
          <pre><Ch01 invoice={invoice[0]} plays={plays} /></pre>
      </div>
    );
  }
  
  export default Refactoring;