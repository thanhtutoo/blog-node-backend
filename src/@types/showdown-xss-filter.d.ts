declare module 'showdown-xss-filter' {
    import Showdown from 'showdown';

    function showdownHighlight(
        converter?: Showdown.Converter,
    ): Showdown.ShowdownExtension[];

    export default showdownHighlight;
}
