
            import { Size } from "./../../../../../stories/carousel.stories.tsx";

            const TempoComponent = () => {
              return Size.render(Size.args);
            }

            TempoComponent.getLayout = (page) => page;

            export default TempoComponent;