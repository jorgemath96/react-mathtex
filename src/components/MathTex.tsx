import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

interface MathTex {
  children: string;
  line?: string;
  classname?: string;
}

const VerifyText = (text: string | undefined) => {
  return text === undefined || text === null || text.split(" ").length === 0;
};

const MathVerifyText = ({ block }: { block: string }) => {
  if (VerifyText(block)) return null;
  if (block.endsWith("$$")) {
    return (
      <p className="text-center mt-4 mb-6">
        <InlineMath>{block.slice(0, -3)}</InlineMath>
      </p>
    );
  } else if (block.endsWith("$")) {
    return (
      <span>
        <InlineMath>{block.slice(0, -2)}</InlineMath>
      </span>
    );
  } else {
    return <span> {block} </span>;
  }
};

const IdentifyMathBlock = (block: string) => {
  let blockIdentified = [];
  if (block.includes("</$>")) {
    blockIdentified = block.split("</$>");
    blockIdentified[0] = blockIdentified[0] + " $";
  } else if (block.includes("</$$>")) {
    blockIdentified = block.split("</$$>");
    blockIdentified[0] = blockIdentified[0] + " $$";
  } else {
    blockIdentified = [block];
  }
  return blockIdentified;
};

const SeparateBlocks = (textLine: string) => {
  const lineArray = textLine.split("<$>");
  return lineArray;
};

const SeparateLines = (textLines: string) => {
  if (VerifyText(textLines)) return [];
  const linesArray = textLines?.split("\n");
  return linesArray;
};

export const LineTex = ({ children, classname, line }: MathTex) => {
  const lineText = line ? line : children;
  const lineArray = SeparateBlocks(lineText);
  const lineInMathBlocks = () => {
    let lineIdentified: string[] = [];
    for (let i = 0; i < lineArray.length; i++) {
      const blocksIdentified = IdentifyMathBlock(lineArray[i]);
      lineIdentified = lineIdentified.concat(blocksIdentified);
    }
    return lineIdentified;
  };
  return (
    <span className={classname ? classname : ""}>
      {lineInMathBlocks().map((block, index) => (
        <MathVerifyText block={block} key={index} />
      ))}
    </span>
  );
};

export const MathTex = ({ children, classname }: MathTex) => {
  if (VerifyText(children)) return <></>;
  const text = SeparateLines(children);
  const toRender = (text: string[]) => (
    <div className={classname}>
      <div className="grid cols-1">
        {text.map((line, key) => (
          <div className="span-col-1 space-y-2 mb-2" key={key}>
            <LineTex>{line}</LineTex>
          </div>
        ))}
      </div>
    </div>
  );

  return toRender(text);
};
