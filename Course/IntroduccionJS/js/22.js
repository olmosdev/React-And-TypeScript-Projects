// Optional Chaining (?)
// Allows you to access properties of an object or call property methods without having to check whether they exist or not
const student = {
    name: "Sophie",
    class: "Networking",
    passed: true
};
console.log(student);
console.log(student.exams?.exam1); // If the "exams" property exists, prints "exam 1"

student.exams = {exam1: 30};
console.log(student);
console.log(student.exams?.exam1); 

// Nullish Coalescing Operator (??)
// It is a logical operator that returns the value on the right side when the value on the left side is null (undefined).
const page = null ?? 1;
console.log(page);

const _page = undefined ?? 1;
console.log(_page);

const __page = 3 ?? 1; // Select a varible + Ctrl + D
console.log(__page);

/*
Updated at 17/08/2025
"!" is used to tell JS that this variable will not be null and that we guarantee that it will have a value.

export default function ExpenseDetail({expense}: ExpenseDetailProps) {
  return (
    <div className="bg-white shadow-lg p-10 w-full border-b border-gray-200">
        <div>

        </div>

        <div>
            <p>{expense.expenseName}</p>
            <p className="text-slate-600 text-sm">{ formatDate(expense.date!.toString()) }</p>
        </div>
    </div>
  )
}
*/
