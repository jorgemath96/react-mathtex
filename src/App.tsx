import { useState } from "react";
import { LineTex, MathTex } from "./components/MathTex";

function App() {
  const [content, setContent] = useState<string>("");
  const math =
    "Dada una función <$>f: A \\longrightarrow \\mathbb{R}</$>, decimos que el límite de <$>f</$> en el punto <$>x_0 \\in \\mathbb{R}</$> existe y es igual a <$>L</$> si se cumple que: \n <$>\\forall \\epsilon >0: \\exist \\delta >0: \\hspace{0.2cm} 0 < |x-x_0| < \\delta \\hspace{0.2cm} \\textrm{  y  } x \\in A \\hspace{0.2cm} \\Longrightarrow |f(x)-L| < \\epsilon</$$> \n En caso de que dicho límite exista, lo escribimos como: <$>\\displaystyle{\\lim_{x \\rightarrow x_0}} f(x) = L</$>.";
  const math2 =
    "Binomio al cuadrado: <$>\\hspace{0.5cm} (x+y)^2 = x^2 +2xy + y^2 </$>";
  return (
    <div className="flex flex-col justify-center items-center gap-y-10">
      <MathTex classname="w-full border-4 border-sky-500 bg-sky-950 text-lg text-sky-100 my-10 p-6">
        {math}
      </MathTex>
      <LineTex classname="w-full border-4 border-green-500 bg-zinc-950 text-lg text-zinc-50 my-10 p-6">
        {math2}
      </LineTex>
      <textarea
        rows={10}
        className="w-5/6 bg-zinc-800 border-2 border-orange-500 text-xl font-bold text-white mt-4 p-2 rounded-lg"
        onChange={(e) => setContent(e.target.value)}
      />
      <MathTex classname="w-full border-4 border-sky-500 bg-sky-950 text-lg text-sky-100 mt-4 mb-20 p-6 rounded-lg">
        {content}
      </MathTex>
    </div>
  );
}

export default App;
