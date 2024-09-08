import { allDocumentations } from "docs/.contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";

export default function Docs({ params }: { params: { slug: string } }) {
  const doc = allDocumentations.find(
    (d) => d._raw.flattenedPath === params.slug
  );
  const Content = getMDXComponent(doc!.body.code);
  return (
    <div className="m-4">
      <Content />
    </div>
  );
}
