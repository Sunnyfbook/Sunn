
            import { Top } from "./../../../../../stories/sheet.stories.tsx";

            const TempoComponent = () => {
              return Top.render(Top.args);
            }

            TempoComponent.getLayout = (page) => page;

            export default TempoComponent;