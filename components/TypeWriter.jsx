import TypeWriterEffect from 'typewriter-effect';

const textArray = ['NodeJS', 'React', 'Angular', 'NextJS', 'TypeScript', 'Python', 'Gradle', 'Kubernetes', 'SpringBoot', 'CSS']

const TypeWriter = () => {
    return (
        <TypeWriterEffect
            options={{
                strings: textArray,
                autoStart: true,
                loop: true,
            }}
        />
    )
}

export default TypeWriter