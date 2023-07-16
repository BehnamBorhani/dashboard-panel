import { transactions } from "../../../datas";
import "./WidgetLg.scss";

export default function WidgetLg() {
   return (
      <div className="WidgetLg">
         <h3 className="WidgetLgTitle">Latest Transactions</h3>
         <table className="WidgetLgTable">
            <tr className="WidgetLgTr">
               <th className="WidgetLgTh">Customer</th>
               <th className="WidgetLgTh">Date</th>
               <th className="WidgetLgTh">Amount</th>
               <th className="WidgetLgTh">Status</th>
            </tr>

            {transactions.map((transaction) => (
               <tr key={transaction.id} className="WidgetLgTr">
                  <td className="WidgetLgUser">
                     <img src={transaction.img} className="WidgetLgImg" />
                     <span className="WidgetLgName">
                        {transaction.customer}
                     </span>
                  </td>
                  <td className="WidgetLgDate">{transaction.date}</td>

                  <td className="WidgetLgAmount">${transaction.amount}</td>

                  <td className="WidgetLgStatus">
                     <button className={`WidgetLgButton ${transaction.status}`}>
                        {transaction.status}
                     </button>
                  </td>
               </tr>
            ))}
         </table>
      </div>
   );
}
