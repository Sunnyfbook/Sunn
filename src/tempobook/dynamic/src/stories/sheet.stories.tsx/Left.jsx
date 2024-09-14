
            import { Left } from "./../../../../../stories/sheet.stories.tsx";

            const TempoComponent = () => {
              return Left.render(Left.args);
            }

            TempoComponent.getLayout = (page) => page;

            export default TempoComponent;