https://www.creativeapplications.net/tutorial/introduction-to-sketching-with-code/

https://www.creativeapplications.net/tutorial/introduction-to-sketching-with-code/
# Einführung in das Skizzieren mit Code

- Zeichnen auf einer 2D-Leinwand
- Der Ursprung befindet sich normalerweise in der oberen linken Ecke einer Leinwand, und die Achsen sind horizontal (x) und vertikal (y).
- Die Einheit ist normalerweise ein Pixel oder die Geräteeinheit.
- Methoden zum Verschieben, Skalieren und Rotieren des Raums, wie die translate(), scale(), rotate() Funktionen von p5.js,
- auch den Raum verzerren.
- Newtonsche Mechanik in 2D
- Sobald man ein Koordinatensystem hat, kann man Dinge in diesem Raum bewegen.
- In der Newtonschen Physik beginnt man von einer Position, wendet dann Geschwindigkeit an, um sie zu bewegen, und wendet Beschleunigung an, um die Geschwindigkeit zu ändern.
- ausgedrückt durch Vektoren,
- Sie als Vektoren auszudrücken macht die Handhabung viel einfacher, als die Werte pro Achse zu manipulieren,
- gut. Newton und Vektoren
- Vektoroperationen
- 3D-Grafik
- Position ist ein Vektor mit 3 Komponenten
- solange sie als Vektoren definiert sind, bleibt die Mathematik im Wesentlichen gleich.
- Da Ihre Leinwand 2D ist, können Sie Dinge, die in einem 3D-Raum definiert sind, nicht einfach darauf platzieren. Sie müssen die Punkte im 3D-Raum in den 2D-Raum übersetzen
- genannt Projektion,
	- Hinweis: https://kyndinfo.notion.site/Projection-and-3D-Rendering-3D-42439e1db7f34cb094375cc7f741e756?pvs=24
- Projektion und 3D-Rendering
- um Dinge 3D aussehen zu lassen, spielt Beleuchtung oder Schattierung
	- Hinweis: eine wichtige Rolle.
- Ohne Licht und Schatten würde eine Kugel wie ein einfacher Kreis aussehen.
	- Hinweis: https://kyndinfo.notion.site/Light-b61cc917db924d3e9742df7282ff2d5d?pvs=24
- alle Daten, die mit mehreren numerischen Parametern dargestellt werden können, werden als Vektor in einem mehrdimensionalen Raum betrachtet,
	- Hinweis: https://kyndinfo.notion.site/Dimensions-6a592d02bd75477a95dd547a745b369c?pvs=24
- man kann vertraute Konzepte und Operationen auf die Daten anwenden, wie Addition, Multiplikation, Berechnung von Abstand und Winkel usw.
- Große Sprachmodelle (LLM) repräsentieren Konzepte wie "Hund", "Mensch", "laufen", "glücklich" usw. als Punkte in einem mega-multidimensionalen Raum
- man kann Mathematik zwischen ihnen anwenden, um beispielsweise die konzeptuelle Distanz oder Ähnlichkeit zwischen zwei Wörtern oder Sätzen zu messen.
- Farbräume
	- Hinweis: https://kyndinfo.notion.site/Colors-and-Numbers-eee83716e6bf4fcc893b488c0ba1fbc8?pvs=24
- Farben können mit einer Reihe von Zahlen dargestellt werden, wie R, G und B.
- Farben und Zahlen
- Abstände
- In einem Raum kann man Abstände zwischen Punkten messen.
- der euklidische Abstand,
- die Länge der geraden Linie zwischen zwei Punkten.
- Wie misst man den Abstand von Tokio nach São Paulo?
- eine gekrümmte Länge entlang der Erdoberfläche.
	- Hinweis: https://en.wikipedia.org/wiki/Spherical_geometry

https://kyndinfo.notion.site/Various-distances-d755a0e4065c457ab5804ea408054b5a?pvs=24
- Konzept der Distanz
	- Hinweis: https://kyndinfo.notion.site/Visualizing-Distances-3473b633ad444ec3a17aa6e97c88eaf3?pvs=24
- den kürzesten Weg finden, um Charaktere im Spieldesign zu bewegen, oder Territorien basierend auf Abständen aufteilen.
- Funktionen, die den Abstand von einem Punkt zur Oberfläche eines Objekts zurückgeben, genannt Signed Distance Functions,
	- Hinweis: https://kyndinfo.notion.site/Signed-distance-functions-32b6ebf05fb84367ac59b4349f080b4c?pvs=24
- beim Skizzieren mit Code bieten Newtonsche oder euklidische Räume die intuitivste und vertrauteste Art, über Raum nachzudenken
- Über Farben
	- Hinweis: https://kyndinfo.notion.site/Spectrum-and-Cones-fd58b78b890840f6bea94a96dc2d6d4b?pvs=24
- Farbmodelle
- Die meisten Farbmodelle basieren heute auf diesem CIE-Farbraum, was bedeutet, dass die Werte in einem System in XYZ-Werte umgewandelt werden können.
- Das RGB-Farbmodell, das wir heute auf Computern verwenden, passt vollständig in den XYZ-Farbraum
- Das Munsell-Farbsystem ist ein System, das Farben nach drei Attributen unterteilt: Farbton (wie Rot, Blau und Grün), Hellwert (Helligkeit) und Chroma (Lebhaftigkeit oder Reinheit der Farbe). Die vielen Farbmodelle, die wir auf Computern verwenden, ähneln Munsells Modell, sind aber so konzipiert, dass sie auf die RGB-Werte auf dem Bildschirm und damit auf XYZ-Werte abgebildet werden können.
	- Hinweis: https://kyndinfo.notion.site/Various-Color-Models-804844f6e8b9475aab4dff0093027080?pvs=24
- Farben berechnen
	- Hinweis: https://kyndinfo.notion.site/Computing-Colors-06ae20de290b4a40865435378e66af7d?pvs=24
- wir können Farben addieren, subtrahieren, multiplizieren oder rotieren.
- Farben zu verarbeiten, um den gewünschten Ton zu erhalten, ist eine entscheidende Fähigkeit in der Bild- und Videoproduktion.
	- Hinweis: https://kyndinfo.notion.site/Color-Processing-9b774e71da0043e69dc9c8575abd93bf?pvs=24
- Farben mischen
	- Hinweis: https://kyndinfo.notion.site/Mixing-Colors-907fec97f46c40539cc70cad22679e42?pvs=24
- eine Reihe von "Mischmodi" wie Addieren, Multiplizieren, Screen, Overlay usw. Dies sind verschiedene Methoden, um eine neue Farbe basierend auf den Eingabefarben zu berechnen.
- Farbmischung in der realen Welt ist das Ergebnis verschiedener Materialien, die Licht reflektieren, brechen und absorbieren.
- Licht
- Um vollständig zu verstehen, wie Farben für uns entstehen, müssen wir verstehen, wie Licht von seiner Quelle zu unseren Augen wandert, von Oberflächen abprallt und dabei reflektiert und gebrochen wird.
	- Hinweis: https://kyndinfo.notion.site/Reflection-and-Refraction-e1e85f98e2c4423b90d9aa33e690eafa?pvs=24
- Reflexion und Brechung
- Wenn Licht auf ein Objekt trifft, absorbiert das Objekt einen Teil des Lichts und reflektiert den Rest.
- Bei transparenten Objekten geht ein Teil auch hindurch.
- Wenn das Material rote und gelbe Spektren des Lichts stärker absorbiert als blaue, erscheint das Objekt blau.
- Raue Oberflächen streuen das Licht in alle verschiedenen Richtungen,
- glatte Oberflächen spiegeln die Umgebung klarer.
- bessere Kontrolle über die Farben und das Erscheinungsbild Ihres Renderings.
	- Hinweis: https://kyndinfo.notion.site/Reflection-and-Refraction-e1e85f98e2c4423b90d9aa33e690eafa?pvs=24
- Raum mit Farben füllen
	- Hinweis: https://kyndinfo.notion.site/Filling-Space-with-Colors-119019e814cf801187eff0d403c99248?pvs=24
- Über Bewegung
- sowohl im Raum als auch in der Zeit zeichnen.
- Newtonsche Mechanik
- Newton sagte im Wesentlichen, dass Dinge in Ruhe an derselben Position bleiben oder sich mit derselben Geschwindigkeit weiterbewegen, bis man eine Kraft anwendet, um sie zu beschleunigen.
- Position, Geschwindigkeit, Beschleunigung und Kraft sind die grundlegendsten Konzepte, um physikalische Bewegung zu verstehen.
- Bild für Bild einfach Kraft zur Beschleunigung addieren, um sie zu ändern, dann Beschleunigung zur Geschwindigkeit, dann Geschwindigkeit zur Position.
	- Hinweis: https://kyndinfo.notion.site/Newtonian-mechanics-7021a67f35004bafb54f86b7821b7e36?pvs=24
- Differentiation und Integration
- Position, Geschwindigkeit, Beschleunigung und Kraft stehen in Beziehungen der Differentiation und Integration.
- Differentiation ist die Änderungsrate,
	- Hinweis: https://www.notion.so/Differentiation-3409ee287a94491ea587508a32df7200?pvs=21
- Integration ist die Ansammlung von Änderungen.
	- Hinweis: https://www.notion.so/Integration-dde2beec57974b1bbc86b1005c44ea1b?pvs=21
- Geschwindigkeit
- wie stark sich die Position zu einem bestimmten Zeitpunkt ändern wird,
- Position ist das Ergebnis der über die Zeit angewendeten und akkumulierten Geschwindigkeit.
- numerische Integration, die die Änderungen in einfache Additionen pro kleinem Zeitabschnitt zerlegt.
- die korrekte Methode, Differentiationen und Integrationen durch Lösen von Gleichungen zu lösen, wird analytische Lösung genannt.
- die Approximation durch Aufteilen der Änderungen über einen kleinen Zeitabschnitt wird numerische Approximation genannt.
- Jedes System, das externe Faktoren wie menschliche Interaktion beinhaltet, kann nicht im Voraus bestimmt werden.
- glatte Bewegung durch diskrete Änderungen approximieren,
- die Ergebnisse können leicht von physikalisch korrekter Bewegung abweichen.
- mehrere Methoden, um dieses Problem zu minimieren.
- Verbesserte Euler-Methode
- und Runge-Kutta-Methode
	- Hinweis: https://en.wikipedia.org/wiki/Runge%E2%80%93Kutta_methods
- Runge-Kutta).
	- Hinweis: https://kyndinfo.notion.site/Continuous-Time-and-Discrete-Time-85fdbc5547e8496594524161c3c628e9?pvs=24
- Tween
	- Hinweis: https://kyndinfo.notion.site/Interpolation-and-Animation-44d00edd89bc41d686260d6bfd6a01d9
- Großartige Animatoren und Motion Designer übertreiben oft Bewegung und Timing, biegen oder ignorieren Realismus, um etwas Ausdrucksvolleres oder Wirkungsvolleres zu schaffen.
- genannt Tweening, kurz für In-Betweening.
- Man beginnt mit der Definition eines Start- und Endzustands und füllt dann die Zwischenbilder durch Interpolation zwischen ihnen aus.
- In der Computeranimation verwenden wir oft Easing-Funktionen, um diese Übergänge zu steuern.
- Easing-Funktionen verbinden einen Wert mit einem anderen und ändern das Tempo dazwischen, wie Verlangsamen, Beschleunigen, Hüpfen,
- Easing-Funktion als eine Art Abbildung zwischen Zeit und einem anderen Wert, wie Position, Skalierung oder Deckkraft.
- Einschränkungen
- Das Hinzufügen von Einschränkungen zu Objekten ist eine Möglichkeit, der Bewegung Realität hinzuzufügen.
- Verlet-Integration ist eine Methode, um einfache Physiksimulationen zu erstellen, indem Punkte mit Stäben verbunden werden, die den Abstand zwischen zwei Punkten einschränken.
- durch die Kombination mehrerer Punkte und Stäbe können Sie verschiedene Arten von Objekten erstellen, von starren Körpern bis zu weichen, seilartigen Objekten.
	- Hinweis: https://kyndinfo.notion.site/Building-Ragdolls-8506d6282e4943a2925a123e5d22bdcd?pvs=24
- um Bewegung präziser und absichtlicher zu steuern, sollten Sie Kinematik studieren.
- Vorwärtskinematik und inverse Kinematik
	- Hinweis: https://kyndinfo.notion.site/Kinematics-fae9b5fd62004afa97156bedd7a95479?pvs=24
- um die Bewegung von gelenkigen Teilen zu beschreiben, wie mechanische Arme oder menschliche Körper.
- Beide Methoden behandeln Strukturen aus mehreren Segmenten und Gelenken, die sie verbinden.
- Vorwärtskinematik beginnt an der Wurzel der Verbindung und propagiert die Haltung vorwärts bis zum Ende.
- direkt die Rotation jedes Gelenks manipulieren, und das bestimmt die Gesamtbewegung.
- Inverse Kinematik ist stärker zielorientiert.
- definieren, wo der Endpunkt sein soll, dann berechnet der Algorithmus die Rotation jedes Gelenks, die das gewünschte Ergebnis erzielt.
- man kann immer etwas Zufälligkeit in sein Design einführen.
- In realen Anwendungen möchten Sie vielleicht vorhersehbarere Methoden wie die oben genannten mit etwas Zufälligkeit kombinieren.
	- Hinweis: https://kyndinfo.notion.site/Taming-Randomness-e4351f08ec7c43a7ad47ef2d1dfe2ed8?pvs=24
- Kamera in Bewegung
	- Hinweis: https://kyndinfo.notion.site/Camera-in-Action-11d019e814cf802ca8e4ea683733c4b8?pvs=24
- Wie Sie die Szene rahmen und den Blickpunkt positionieren, formt das Endergebnis dramatisch.
- Skizzieren mit Bewegung
- Ob Sie den Gesetzen der Physik folgen, sie für Ausdruckskraft brechen oder Ihre eigenen Systeme erfinden, Bewegung eröffnet viele Möglichkeiten für Erkundung und Kreativität.
- Licht und Klang sind beide Wellen,
- Frequenz beeinflusst, was wir wahrnehmen,
- Schallfrequenzen werden als Tonhöhe wahrgenommen, und wir beschreiben sie als "hoch" oder "tief".
- verschiedene Frequenzen von Licht erscheinen uns als verschiedene Farbtöne ohne jedes Gefühl von hoher oder niedriger Frequenz.
- Farben
	- Hinweis: https://kyndinfo.notion.site/Computing-Colors-06ae20de290b4a40865435378e66af7d?pvs=24
- Klang
- Klang ist ebenfalls eine Welle.
- Niedrigere Frequenzen fühlen sich "tief" an, und höhere Frequenzen fühlen sich "hoch" an. Diese Höhe des Klangs wird Tonhöhe genannt.
- wir erleben Tonhöhe nicht als gerade Linie – es fühlt sich eher wie eine Spirale an.
- wenn Sie bei 440 Hz (der Note A) beginnen und nach oben gehen, erreichen Sie schließlich ein weiteres A bei 880 Hz bei genau der doppelten Frequenz. Es ist nicht derselbe Klang, aber wir hören ihn als dieselbe Note, nur in einer höheren Oktave.
- Die westliche Musik teilt die Oktave typischerweise in 12 Tonhöhen,
	- Hinweis: https://kyndinfo.notion.site/Pitch-and-Frequency-9792f391b97e427eaccea6cabd6cf8c5?pvs=24
- gleichmäßig verteilt in Bezug auf das Frequenzverhältnis.
- Andere Musikkulturen teilen die Oktave anders auf.
- Nicht nur Tonhöhe, wir können Klänge auch anhand ihrer Klangfarbe unterscheiden, die wie die Textur oder Farbe eines Klangs ist.
- wie man verschiedene Klänge unterscheiden kann, wie Vogelgezwitscher, Autohupen oder Instrumente wie Klavier und Trompete.
- "Klangfarbe".
- Sowohl Tonhöhe als auch Klangfarbe sind an die physikalischen Eigenschaften des Dinges gebunden, das den Klang erzeugt.
- Gitarrensaite als Beispiel.
- Die Tonhöhe hängt von ihrer Länge und ihrem Gewicht ab.
- Je länger oder schwerer die Saite, desto tiefer die Tonhöhe.
- Die Haupttonhöhe wird Grundfrequenz genannt,
- Teile der Saite schwingen auch in kleineren Abschnitten – Hälften, Dritteln, Vierteln usw. Diese erzeugen Obertöne oder Harmonische, die einfache Vielfache der Grundfrequenz sind.
- Genau wie Farben normalerweise eine Mischung von Frequenzen sind, sind es Klänge auch.
- wir können eine Violine von einer Flöte unterscheiden, oder jemandes Stimme erkennen, oder wissen, welche Art von Objekt ein Geräusch gemacht hat, basierend darauf, wie die Obertöne dieses Klangs strukturiert sind, unabhängig von der Frequenz.
- Das Verständnis von Welleneigenschaften hilft uns, die Beziehung zwischen physikalischen Schwingungen und den Klängen, die wir hören, besser zu verstehen, und Ideen zu skizzieren, die mit Klang spielen und ihn visualisieren.
	- Hinweis: https://kyndinfo.notion.site/Sound-visualization-c6b25aa7a81f47adabd2c7aab3ce501f?pvs=21

https://kyndinfo.notion.site/Sine-waves-and-Additive-Synthesis-80562e2ec05c4cc0b109691dea3201d7?pvs=21

https://kyndinfo.notion.site/Fourier-Series-caa91c112da043888cbe45f18392caff?pvs=21
- Größenordnung und Logarithmus
- die Beziehung zwischen physikalischen Größen und ihrer Auswirkung auf die menschliche Wahrnehmung ist in vielen Fällen logarithmisch.
- Physikalisch kann ein sonniger Tag im Freien 200-mal mehr Licht haben als ein gut beleuchtetes Büro. Aber fühlt es sich 200-mal heller an? Wahrscheinlich nicht.
- Das Gleiche gilt für Klang. Lautstärke hängt mit der Energie des Klangs zusammen, die direkt mit der Amplitude der Schallwelle verbunden ist.
	- Hinweis: https://kyndinfo.notion.site/Physical-values-and-human-perception-54d4ccb31a9b466d8c9e77a57913baa2?pvs=24
- Leben entwickelt sich nicht mit einem Zweck.
- Eine Aussage wie "Giraffen erwarben lange Hälse, um Blätter hoch oben zu fressen" ist irreführend. Die Realität ist eher, dass etwas Zufälliges mit den Genen passierte, und diese Veränderung den Genen selbst zufällig eine bessere Chance gab, an folgende Generationen weitergegeben zu werden.
- Auflösung
- Auflösung ist, wie detailliert etwas dargestellt oder wahrgenommen werden kann.
- Computerbildschirme bestehen aus kleinen Punkten.
- wenn diese Punkte klein genug sind – irgendwo um 300 DPI (Punkte pro Zoll) bei Leseabstand, oder einem Blickwinkel von 1 Bogenminute (1/60 Grad) – hören unsere Augen und unser Gehirn auf, die Punkte zu sehen, und beginnen, Bilder und Zeichen zu sehen.
- Filme haben nur 24 Bilder pro Sekunde, aber das reicht aus, um uns glauben zu machen, dass sie glatt und real sind.
- Die Mehrheit der digitalen Audiodaten verwendet 44.100 Samples pro Sekunde, was bedeutet, dass eine Sekunde Klang durch 44.100 Zahlen dargestellt wird.
- 20.000 Hz, was etwa die Obergrenze der Tonhöhe ist, die Menschen hören können.
- Wenn Menschen andere Fähigkeiten hätten, hätten diese Technologien anders gestaltet werden können.
- selbst wenn es nicht genug Auflösung gibt, versucht unser Gehirn oft, Kontinuität zu sehen, indem es die fehlenden Details ergänzt.
- Manchmal ist es besser, das Gehirn die Lücken füllen zu lassen, als zu versuchen, alles im Detail zu zeichnen und die Illusion durch hier und da auftretende Unstimmigkeiten zusammenbrechen zu lassen.
- Wenn wir mit Code skizzieren, beschäftigen wir uns immer damit, wie Menschen Dinge wahrnehmen.
- hilft uns, Dinge aus verschiedenen Perspektiven zu sehen und zu machen.
- Muster
- Menschen sind darauf programmiert, Muster zu erkennen.
- Sich wiederholende Muster sind grundlegend für Design und Kunst.
- Schachbrett, Streifen und andere sich wiederholende Motive erscheinen universell in Dekoration und Textilien.
- Musiker schaffen Struktur durch Rhythmen, Phrasen und Akkordfolgen.
- Mustern zu folgen macht Dinge vorhersehbar. Es ist oft entspannend und beruhigend,
- intensiver Rhythmus kann auch Energie und sogar Trance bringen.
- Einen vorhersehbaren Rhythmus zu brechen erzeugt Spannung und zieht die Aufmerksamkeit der Menschen an,
- zwischen Spannung und vertrauten Mustern hin und her zu gehen ist eine Möglichkeit, einen Song oder eine Geschichte voranzutreiben.
- Wiederholung
- Grundlage von Mustern ist Wiederholung.
- viele Methoden, um Wiederholungen mathematisch und programmatisch zu erstellen und zu handhaben.
- Modulo ist im Grunde eine mathematische Art zu sagen "zähle bis n, dann gehe zurück zu eins und wiederhole", was einfach das Teilen einer Zahl durch eine andere Zahl und das Nehmen des Rests ist.
- Grundlage für viele sich wiederholende Muster, wie wiederholende Kacheln und musikalische Rhythmen unten.
- Wiederholung von kontinuierlichen Werten.
	- Hinweis: https://kyndinfo.notion.site/Repetition-60e4c6223b424948893b4a0d9368d4d0?pvs=24
- Sinuswellen
	- Hinweis: https://kyndinfo.notion.site/Sine-waves-and-Additive-Synthesis-80562e2ec05c4cc0b109691dea3201d7?pvs=21
- Die Sinuswelle ist ein weiterer grundlegender Baustein für sich wiederholende Muster.
- mit einer unendlichen Menge von Sinuswellen, jede mit ihrer eigenen Frequenz, Amplitude und Phase, kann man theoretisch jedes Muster synthetisieren.
- diese Idee wird Fourier-Reihe für sich wiederholende Muster genannt
- Fourier-Transformation für solche, die sich nicht wiederholen.
	- Hinweis: https://kyndinfo.notion.site/Fourier-Series-caa91c112da043888cbe45f18392caff?pvs=21
- man wird ihnen an vielen Stellen begegnen, wie Audio- und Signalverarbeitung und einer Menge Physik.
- Kachelung
- Muster. Durch Wiederholen derselben Elemente in einem Raum oder Aufteilen eines Raums basierend auf einigen Regeln können wir verschiedene interessante Muster erstellen, die sich für immer fortsetzen können.
- einfache Wiederholung derselben geometrischen Formen bis hin zu etwas Einzigartigerem und Interessanterem wie M. C. Eschers
- Penrose-Kacheln oder Truchet-Kacheln.
- Ein Voronoi-Diagramm ist eine Methode, um organischere Muster zu erstellen.
- Zellen in Voronoi-Diagrammen sind alle unterschiedlich,
- Rhythmus
	- Hinweis: https://kyndinfo.notion.site/Rhythm-cb009f19d2b84fd1bd0cb5d8474cf022?pvs=24#53fea47c5d3b4aa4b5a695fd7887ab8f
- Anstatt Raum aufzuteilen, können wir musikalischen Rhythmus durch Aufteilen der Zeit erstellen.
- Selbst innerhalb desselben Tempos und derselben Taktart kann die Zeit unterschiedlich aufgeteilt werden, und die Art, wie man aufteilt, bestimmt das "Gefühl" des Rhythmus.
- Viele Spieler passen auch das Timing leicht vom exakten Timing ab, natürlich oder absichtlich, um mehr Nuancen hinzuzufügen, wie schwere oder federnde Rhythmen.
- Musik hat viele Schichten von Wiederholung jenseits einfacher Drum-Loops.
- rhythmische und melodische Muster von Phrasen, Songstruktur wird durch Wiederholen verschiedener Abschnitte aufgebaut,
- Zufälligkeit
- nichts folgt einem perfekt regelmäßigen Muster.
- Zufälligkeit ist ein großartiges Werkzeug, das helfen kann, unsere Skizzen interessanter und natürlicher zu machen.
- viele verschiedene Wege, Zufälligkeit für Ihren Zweck zu "formen".
- je mehr die Summe oder der Durchschnitt zu einem bestimmten erwarteten Wert konvergieren wird.
	- Hinweis: https://en.wikipedia.org/wiki/Law_of_large_numbers
- Man kann auch eine Funktion auf zufällige Ergebnisse anwenden, um die Verteilung anzupassen.
	- Hinweis: https://kyndinfo.notion.site/Taming-Randomness-e4351f08ec7c43a7ad47ef2d1dfe2ed8?pvs=24
- wenn man das Quadrat einer zufälligen Gleitkommazahl von 0,0 bis 1,0 nimmt, erhält man diese Form.
- Können Sie den Unterschied zwischen diesen beiden Stadtlandschaften sehen? Diese wurden mit demselben regelmäßigen Raster mit zwei verschiedenen Funktionen erstellt, die ihnen subtil unterschiedliche Eindrücke verleihen.
- Rauschfunktionen
	- Hinweis: https://kyndinfo.notion.site/Noise-function-e4351f08ec7c43a7ad47ef2d1dfe2ed8?pvs=24#f64e868f4f02463fb7667509ae54d740

https://kyndinfo.notion.site/Reading-a-Noise-Function-1f8019e814cf80ecaa40c37ec78c77aa?pvs=21

https://kyndinfo.notion.site/Drawing-Landscape-1d0019e814cf807f984ef8012fba591b?pvs=21
- Rauschfunktionen sind Methoden, um zufällig, aber kontinuierlich wechselnde Werte zu erhalten, wie das Auf und Ab eines Geländes, die Änderung der Temperatur oder die Richtung, in die ein Tier wandert.
- aber im Gegensatz zu Würfelwürfen sehen sie glatt verbunden aus und Werte nebeneinander scheinen irgendwie zusammenzuhängen.
- viele Rauschfunktions-Algorithmen, aber die meisten wichtigen teilen eine einfache Idee des glatten Verbindens von Zufallszahlen.
- die Werte sind zufällig, aber wenn man einen Punkt nahe einem anderen wählt, geben sie relativ nahe Werte zurück, und es gibt keinen abrupten Sprung oder Diskontinuität zwischen ihnen.
- Rauschfunktionen werden oft geschichtet, indem man sie in verschiedenen Maßstäben zusammenaddiert, um ein natürlicheres Aussehen zu erzeugen.
- Stellen Sie sich eine Bergkette vor. Von weitem sehen Sie ihre gezackte Silhouette. Je näher Sie wandern, desto mehr sehen Sie kleinere Grate, und aus der Nähe bemerken Sie, dass jede Felswand winzige Risse und Vorsprünge hat, die den größeren Formen ähneln.
- häufiges Muster in der Natur, dass Dinge ähnliche Formen auf vielen Zoomstufen wiederholen.
- rollende Wolken, brechende Wellen, rissiger Wüstenboden, Blattadern und die Form von Küstenlinien.
- Fraktal
- Ein Fraktal ist ein Muster oder eine Form, die dieselbe Struktur in verschiedenen Maßstäben wiederholt, so dass ein Teil der Form dem Ganzen ähnelt und ein Unterteil eines Teils dem größeren Teil ähnelt.
- Das Schichten von Rauschfunktionen kann als eine Möglichkeit gesehen werden, die fraktale Natur der realen Welt mit einer endlichen Anzahl von Berechnungen zu emulieren
- Mandelbrot-Menge oder Julia-Menge haben buchstäblich unendliche Details.
- unscharfes Foto
	- Hinweis: https://kyndinfo.notion.site/Resolution-cb009f19d2b84fd1bd0cb5d8474cf022?pvs=24
- Datenkompression?
- Technologien wie ZIP, JPEG oder MP3 borgen sich im Grunde denselben Trick. Sie suchen nach wiederholter Struktur in Daten, werfen die redundanten Bits weg und behalten einen kleineren Bauplan.
- Und KI-Bilderzeugung. Die grundlegende Idee von Diffusionsmodellen ist, der KI den Prozess des Hinzufügens von Rauschen zu einem Bild zu zeigen, bis es unkenntlich wird, und sie den umgekehrten Prozess lernen zu lassen, um plausible Details von Bildern aus Rauschen neu zu imaginieren.
- Muster sind es, die uns die Welt verstehen lassen. Sie sind so entscheidend für uns, um Informationen zu erfassen und zu organisieren.
- das Erlernen, auf Muster zu matchen, kann uns dazu bringen, die Details zu übersehen, die wichtig sind, und in Stereotypen und vorschnelle Urteile abzugleiten.
- eine nützliche Praxis ist es, zwischen den Ebenen zu springen.
- Große Muster erkennen, während man die subtilen Unterschiede, Nuancen und das Rauschen schätzt, ohne in übermäßige Verallgemeinerungen zu verfallen.
- Über Interpolation
- Interpolation geht darum, die Werte zu schätzen, die zwischen den Punkten liegen, die man bereits kennt.
- Wenn man einen Charakter von Punkt A nach B bewegt, interpoliert man zwischen ihnen, damit man weiß, wo sich der Charakter zu einem bestimmten Zeitpunkt befindet.
- Lineare Interpolation
	- Hinweis: https://kyndinfo.notion.site/Linear-Interpolation-44d00edd89bc41d686260d6bfd6a01d9?pvs=24#22519d75d27644fdbf13e66c22829349
- der Wert ändert sich die ganze Zeit mit derselben Rate.
- Angenommen, Punkt P bewegt sich von einem Punkt A zu einem anderen Punkt B, und die Variable t ist das Verhältnis, wie weit P sich zwischen ihnen bewegt hat.
- Wenn t = 0, ist P an derselben Position wie A. Wenn t = 1, ist P an derselben Position wie B, und wenn t = 0,5, ist P genau am Mittelpunkt zwischen A und B.
- Easing-Funktionen
	- Hinweis: https://kyndinfo.notion.site/Easing-functions-f0219558d6a649a4acf8c09f5001c527?pvs=21
- Um die Rate zu manipulieren, verwenden wir verschiedene Funktionen, die Easing-Funktionen genannt werden.
- sie können jede Funktion sein, die einen Wertebereich (normalerweise 0 bis 1) kontinuierlich auf denselben Bereich abbilden kann, wobei Anfang und Ende gleich bleiben.
	- Hinweis: https://kyndinfo.notion.site/Mapping-18e019e814cf803bacf3f79096d6d82b?pvs=21
- Bézier und Spline
	- Hinweis: https://kyndinfo.notion.site/B-zier-and-Spline-9f1cdf1b432c4f09801ed5fcad0d70f8?pvs=24
- Einen Pfad zwischen Punkten auf flexible, aber präzise Weise zu definieren, ist sehr entscheidend für Computergrafik, um Linien und Formen zu zeichnen.
- die gängigste Methode, Bézier-Kurve genannt, ist im Grunde das mehrfache Wiederholen linearer Interpolationen. Die Demo unten veranschaulicht diese Idee.
- viele verschiedene Methoden, um gekrümmte Linien ähnlich wie Bézier-Kurven zu zeichnen, aber mit fortgeschritteneren Funktionen. Zum Beispiel führt B-Spline zusätzliche Parameter ein, um die Gewichte jedes Punktes anzupassen und nuanciertere Kontrolle über die Form der Linie hinzuzufügen.
	- Hinweis: https://kyndinfo.notion.site/B-Spline-B-9f1cdf1b432c4f09801ed5fcad0d70f8?pvs=24#775cb52fa3f445d9a2ffba8c91ae9ce3
- Glätte und Stetigkeit
- Wenn wir Kurven zeichnen, kümmern wir uns oft darum, wie glatt sie sind.
- um mit einer bestimmten Art von Glätte umzugehen, gibt es ein sehr nützliches mathematisches Konzept namens Stetigkeit.
- Um zu messen, wie glatt eine Kurve im mathematischen Sinne ist, kann man die Ableitung der Funktion nehmen, die die Kurve darstellt.
- die erste Ableitung zeigt die Änderungsrate der Position, und die zweite Ableitung zeigt die Änderungsrate der Änderungsrate.
- Ein Algorithmus namens Natural Spline ist darauf ausgelegt, C2-Stetigkeit zu garantieren
	- Hinweis: https://kyndinfo.notion.site/Controlling-curves-69ce2d8dc720457ba7cd9392e350dbce?pvs=24
- Der Hobby-Kurven-Algorithmus minimiert die Krümmung an jedem Punkt entlang der Linie,
- Smoothstep-Funktionen
- Für das glatte Verbinden von Linien oder Interpolationen werden oft Hermite-Interpolation oder sogenannte Smoothstep-Funktionen verwendet.
- Wenn t von 0 nach 1 geht, können diese Funktionen die Änderungsrate anpassen, um die Ableitung am Anfang und am Ende null zu machen.
- Die erste Formel garantiert C1-Stetigkeit und die zweite ist für C2, die letzte ist die allgemeine Form für jede Stetigkeitsstufe.
- wenn Sie sich die Graphen unten ansehen, können Sie visuell bestätigen, dass die Änderungsrate null wird.
- Interpolation für viele beliebige Punkte
	- Hinweis: https://kyndinfo.notion.site/Continuous-Mapping-1ca019e814cf80d4920dd10f57622dc2?pvs=24
- Methoden, um Algorithmen zu verwenden, um die genaue Art herauszufinden, wie man zwischen Punkten interpoliert.
- nützlich, wenn es mehrere Datenpunkte gibt, die über einen Raum verteilt sind.
- RBF-Interpolation
- Sie löst automatisch nach Gewichten auf und erzeugt eine glatte Oberfläche
- Farben mischen
	- Hinweis: https://kyndinfo.notion.site/Mixing-Colors-907fec97f46c40539cc70cad22679e42?pvs=24
- Man kann zwei oder mehr Farben mischen, indem man zwischen ihnen interpoliert.
- eine gekrümmte Linie in einem Farbraum zeichnen, um einen interessanten Farbverlauf zu erhalten.
- Alles interpolieren
- man kann zwischen allem interpolieren, was als Vektoren dargestellt werden kann.
- Indem man Dinge durch die Linse von Konzepten wie Vektoren und Interpolation betrachtet, können wir viele Dinge auf dieselbe Weise behandeln
- Interpolation ist tatsächlich eine mächtige und vielseitige Technik, die man seinem Werkzeugkasten hinzufügen sollte.
- Extrapolation.
- Extrapolation ist das Verlängern einer Linie über die Enden hinaus. Extrapolation wird verwendet, um Werte jenseits der Grenze bekannter Datenpunkte vorherzusagen
- Über Wellen
	- Hinweis: https://kyndinfo.notion.site/Wave-be9d50efaf8a4a039ae08121a4ea00a8?pvs=24
- Wellen sind überall. Ich nehme an, das Wort bedeutete ursprünglich nur Wellen auf der Wasseroberfläche, wie dem Ozean oder einem See.
- es gibt viele andere Dinge, die Eigenschaften von Wellen aufweisen, wie Klang, Erdbeben, elektromagnetische Wellen und Licht.
- Sinuswelle
- Mathematisch ist die Sinuswelle die grundlegendste Wellenform.
- Sie stellt die Position eines Punktes auf einem Einheitskreis dar, wenn sich der Zentriwinkel ändert.
- eine Sinuskurve kann als Ergebnis eines physikalischen Objekts gezeichnet werden, das der Federgleichung folgt (Hookesches Gesetz, F=-kx).
- bedeutet, wenn man ein Ding an einer Feder vibrieren lässt und seine Position über die Zeit aufträgt, erhält man eine Sinuskurve.
- Schwingung und Ausbreitung
- Wellen breiten sich aus und verteilen sich im Raum.
- Viele Wellen sind mechanisch, was bedeutet, dass sie durch physische Materialien verursacht werden, die gegeneinander drücken.
- Wenn man eine Gitarrensaite zupft, vibriert sie und drückt die Luft drum herum, die die Luft daneben drückt, und so weiter.
- Klang wird als Schwingungen des Luftdrucks auf diese Weise durch einen Raum verbreitet. Erdbeben, Ozeanwellen usw. gehören alle zu dieser Kategorie.
	- Hinweis: Licht
- Elektromagnetische Wellen sind eine andere Klasse von Wellen, die überhaupt kein materielles Medium benötigen.
- Eigenschaften sowohl von Teilchen (Photonen) als auch von Wellen.
- Licht, Radio, Mikrowellen, Röntgenstrahlen usw. sind dasselbe Phänomen bei verschiedenen Frequenzen.
- Was oszilliert, sind einfach die elektrischen (E) und magnetischen (B) Felder selbst.
- Selbst ohne ein Medium gehorchen elektromagnetische Wellen immer noch derselben Wellenphysik, wie Reflexion, Brechung, Interferenz, Beugung.
- Das Konzept der "Welle" ist eine Abstraktion, um diese gemeinsamen Eigenschaften zwischen verschiedenen Dingen und Phänomenen zu erfassen. Es ist nicht so, dass sie sich gleich verhalten, weil sie Wellen sind, sondern wir nennen sie Wellen, weil sie denselben Regeln folgen.
- Elektromagnetische Wellen zwischen etwa 400–800 Terahertz sind das, was wir normalerweise als Licht betrachten,
- sichtbar für menschliche Augen.
- Schallwellen sehen Klang ist auch eine Welle.
	- Hinweis: https://kyndinfo.notion.site/Sound-visualization-c6b25aa7a81f47adabd2c7aab3ce501f?pvs=24
- Im Fall von Licht entspricht die Frequenz der Farbe. Bei Klang entspricht die Frequenz der Tonhöhe, wie hoch oder tief er klingt, und die Amplitude beeinflusst die Lautstärke.
- Zahlen und Intervalle
- Musikalische Intervalle basieren auf Frequenzverhältnissen.
- Die gleichschwebende Stimmung, die in der westlichen Musik üblich ist, teilt eine Oktave gleichmäßig in 12 Halbtöne.
- das Verhältnis der Frequenz von einer Note zu ihrem rechten Nachbarn (z.B. C zu C#) ist 2^(1/12).
- Mit dem Halbton als Einheit können wir den Abstand zwischen Noten als eine einfache Zahlenbeziehung betrachten.
- Interessanterweise erleben wir Tonhöhe nicht als gerade Linie – es fühlt sich eher wie eine Spirale an.
- wenn Sie bei 440 Hz (der Note A) beginnen und nach oben gehen, erreichen Sie schließlich ein weiteres A bei 880 Hz bei genau der doppelten Frequenz.
- Es ist nicht derselbe Klang, aber wir hören ihn als dieselbe Note, nur in einer höheren Oktave.
- verschiedene Harmonien konstruieren. Es geht alles um Verhältnis und relative Beziehungen,
- abhängig davon, wie man sie vertikal anordnet (gleichzeitig spielt) oder horizontal (nacheinander spielt),
	- Hinweis: https://kyndinfo.notion.site/Pitch-and-Frequency-9792f391b97e427eaccea6cabd6cf8c5?pvs=21

https://kyndinfo.notion.site/Numbers-and-Intervals-9da3659937e8468aa5a32d232d7fd0bb?pvs=21

https://kyndinfo.notion.site/The-secrets-of-sound-for-kids-14a019e814cf80e5a6e5ea1255f13e26?pvs=21
- Klangfarbe
- Abgesehen von Tonhöhe und Lautstärke hat Klang auch Klangfarbe, die wie die Textur oder Farbe eines Klangs ist.
- Klangfarbe kommt daher, dass die meisten Klänge nicht aus einer einzelnen Frequenz bestehen, sondern aus einer Mischung vieler verschiedener Frequenzen.
- das Gleichgewicht zwischen diesen verschiedenen Frequenzen bestimmt die Klangfarbe.
- man kann sehen, wie sich die Form der Welle ändert, wenn wir zusätzliche Sinuswellen mit verschiedenen Frequenzen und Amplituden (dem Radius des Kreises) hinzufügen, in diesem Fall näher an eine sogenannte Rechteckwelle kommend.
	- Hinweis: https://kyndinfo.notion.site/Sine-waves-and-Additive-Synthesis-80562e2ec05c4cc0b109691dea3201d7?pvs=24
- Fourier-Reihe
- man kann theoretisch jedes periodische Muster synthetisieren.
- genannt Fourier-Reihe für sich wiederholende Muster und Fourier-Transformation für solche, die sich nicht wiederholen.
- Durch Anwenden der Fourier-Transformation auf Klangdaten können wir die Menge verschiedener Frequenzen bestimmen, die darin enthalten sind.
	- Hinweis: https://kyndinfo.notion.site/Sine-waves-and-Additive-Synthesis-80562e2ec05c4cc0b109691dea3201d7?pvs=21

https://kyndinfo.notion.site/Fourier-Series-caa91c112da043888cbe45f18392caff?pvs=21
- Navier-Stokes-Gleichungen
- Die Navier-Stokes-Gleichungen beschreiben die Eigenschaften und das Verhalten von Medien wie Wasser und Luft, einschließlich Massenerhaltung, Impulserhaltung und Viskosität.
- wie Wellen in diesen Medien funktionieren,
- oft für Fluidsimulation verwendet. Das Verstehen und Simulieren von Wellen mit den Navier-Stokes-Gleichungen kann ein lustiges und interessantes Forschungsthema sein.
	- Hinweis: https://kyndinfo.notion.site/Fluid-Simulation-f0516d9d12e245a08ae5c7545ac822dd?pvs=24
- Über Formen
- Geometrische Zeichnungen
- Das Verstehen grundlegender Formen gibt uns eine Grundlage, um viele andere komplexere Formen zu zeichnen.
	- Hinweis: https://kyndinfo.notion.site/Geometric-Drawings-2cefb8d81ced41d5af532dd7bdfdceee?pvs=24
- Sie in Mustern zu wiederholen ist ein wichtiges Vokabular des dekorativen und grafischen Designs.
	- Hinweis: https://kyndinfo.notion.site/Tiling-6bc7c5c29dc442a4ab3c63c233f00ca7?pvs=24
- Kollisionserkennung
- wir verwenden oft geometrische Formen auch als Stellvertreter für komplexere Formen.
- Objektüberschneidungen erkennen.
- Wir verwenden normalerweise grundlegende Formen wie Kreise, Dreiecke, Rechtecke und Kombinationen davon, um komplexe Formen bei verschiedenen benötigten Genauigkeiten zu approximieren.
- Verschiedene Methoden, um zu prüfen, ob sich Figuren überlappen, werden verwendet, um Kollisionen zwischen Objekten in Physiksimulationen und Spielen zu erkennen.
	- Hinweis: https://kyndinfo.notion.site/Detecting-Collision-7c8c74926f824b2bb310b08988a384a7?pvs=24

https://developer.mozilla.org/en-US/docs/Games/Techniques/3D_collision_detection?utm_source=chatgpt.com
- Kurven
- Kurven sind offensichtlich ein sehr wesentliches Werkzeug zum Skizzieren.
- Kurven haben unendliche Möglichkeiten und sind viel schwerer zu handhaben.
- Kumulative Kurven
	- Hinweis: https://kyndinfo.notion.site/Cumulative-Curves-2b00ce52283b4802b354d72aff191745?pvs=24
- die häufigsten Arten, wie Kurven in der physischen Welt auftreten, sind durch kumulative Bewegung oder Aufbau, was bedeutet, dass ein Punkt beginnt, sich von einem Ort zu bewegen und seinen Kurs über die Zeit ändert.
- Parametrische Ansätze
	- Hinweis: https://kyndinfo.notion.site/Parametric-Approaches-990cdedc884b4e5e831e4c9da4c70040?pvs=24
- Beim parametrischen Ansatz wird eine Form oder Kurve mathematisch mit einem oder mehreren Parametern definiert. Durch Variieren dieser Parameter können Sie Punkte erzeugen, die die Form ausmachen.
- wenn der Parameter t genannt wird, können Sie alle Punkte von Anfang bis Ende erhalten, indem Sie t innerhalb eines bestimmten Bereichs bewegen.
- Bézier und Spline
- Eine Spline-Kurve ist eine mathematisch definierte Kurve, die glatt durch eine Reihe von Kontrollpunkten verläuft oder ihnen nahe kommt.
- viele Varianten einschließlich Bézier-Kurven, B-Spline-Kurven, NURBS (Non-Uniform Rational B-Splines), Cardinal Splines, Catmull-Rom Splines, Hermite Splines usw.
	- Hinweis: https://kyndinfo.notion.site/B-zier-and-Spline-9f1cdf1b432c4f09801ed5fcad0d70f8?pvs=24
- Kurven kontrollieren
- Signed Distance Functions
	- Hinweis: https://kyndinfo.notion.site/Signed-distance-functions-32b6ebf05fb84367ac59b4349f080b4c?pvs=24
- Eine SDF ist eine Funktion, die Ihnen sagen kann, wie weit ein Punkt von einer Oberfläche einer Form entfernt ist, sagen wir einer Kugel (normalerweise im euklidischen Raum)
- der Abstand eines Punktes von der Oberfläche einer Kugel kann wie unten ausgedrückt werden, wobei p die Koordinate des Punktes ist, c das Zentrum der Kugel und r der Radius:
- SDF ist die Technik, die als Grundlage für viele atemberaubende 3D-Grafiken verwendet wird
- 3D-Rendering mit SDF
	- Hinweis: https://kyndinfo.notion.site/Projection-and-3D-Rendering-3D-42439e1db7f34cb094375cc7f741e756?pvs=24

https://kyndinfo.notion.site/Reading-Raymarching-Primitives-124019e814cf807084b4df5cd8d1e250?pvs=24

https://kyndinfo.notion.site/Drawing-Landscape-1d0019e814cf807f984ef8012fba591b?pvs=24
- Rauschen und Fraktal
	- Hinweis: https://kyndinfo.notion.site/Reading-a-Noise-Function-1f8019e814cf80ecaa40c37ec78c77aa?pvs=24
- Weitere Formen erkunden
- Polygone: Ich nehme an, Sie wissen, dass fast alle 3D-Spielcharaktere aus einer Menge von Dreiecken gemacht sind.
- 3D-Formen als eine Sammlung winziger Polygone zu definieren (normalerweise Dreiecke, aber können auch Vierecke oder andere Formen sein) ist eine solch gängige Methode.
- Ich empfehle, grundlegende Werkzeuge selbst zu bauen, um die Grundlagen zu lernen.
- Fazit
	- Hinweis: https://kyndinfo.notion.site/Sketching-with-Math-and-Quasi-Physics-837e231967134bb5a8307bb9f41c8ea1

https://kynd.github.io/p5sketches/index.html


# Introduction to Sketching with Code

https://www.creativeapplications.net/tutorial/introduction-to-sketching-with-code/


- About Space
- In an everyday sense, space feels like a void for objects and matter to fill. We are all in space and move within space.
- we can only measure position relative to something.
- From a relativistic perspective, both geocentrism and heliocentrism can be seen as correct in their own reference frames, but neither is absolutely correct.
- Drawing on a 2D canvas
- need to have three things: an origin (a reference point to measure the position relatively from), axes along which we measure distances, and a unit to define what distance corresponds to a number 1.
- the origin is usually the top-left corner of a canvas, and axes are horizontal (x) and vertical (y).
- unit is usually a pixel or the device unit.
- methods to translate, scale and rotate the space, such as p5.js’s translate(), scale(), rotate() functions,
- also skew the space.
- Newtonian mechanics in 2D
- Once you have a coordinate system, you can move things around in this space.
- In Newtonian physics, you start from a position, then apply velocity to move it, and apply acceleration to change the velocity.
- expressed by vectors,
- Expressing them as vectors makes it much easier to handle them, as opposed to manipulating the values per axis,
- good. Newton and Vectors
- Vector Operations
- 3D Graphics
- position is a vector with 3 components
- as long as they are defined as vectors, the math stays basically the same.
- Because your canvas is 2D, you cannot just place things defined in a 3D space on it. You need to translate the points in 3D space to 2D space
- called projection,
	- Note: https://kyndinfo.notion.site/Projection-and-3D-Rendering-3D-42439e1db7f34cb094375cc7f741e756?pvs=24
- Projection and 3D Rendering
- to make things look 3D, lighting or shading
	- Note: plays an important role.
- Without light and shade, a sphere would look like just a circle.
	- Note: https://kyndinfo.notion.site/Light-b61cc917db924d3e9742df7282ff2d5d?pvs=24
- any data that can be represented with multiple numeric parameters are thought as a vector in multi dimensional space,
	- Note: https://kyndinfo.notion.site/Dimensions-6a592d02bd75477a95dd547a745b369c?pvs=24
- you can apply familiar concepts and operations to the data, such as addition, multiplication, calculating distance and angle, etc.
- large language models (LLM) represent concepts like “dog,” “human,” “run,” “happy,” etc. as points in a mega-multidimensional space
- you can do math between them to, for example, measure conceptual distance or similarity between two words or sentences.
- Color Spaces
	- Note: https://kyndinfo.notion.site/Colors-and-Numbers-eee83716e6bf4fcc893b488c0ba1fbc8?pvs=24
- Colors can be represented with a series of numbers, such as R, G, and B.
- Colors and Numbers
- Distances
- In a space, you can measure distances between points.
- the Euclidean distance,
- the length of the straight line between two points.
- How do you measure the distance from Tokyo to São Paulo?
- a curved length along the surface of the Earth.
	- Note: https://en.wikipedia.org/wiki/Spherical_geometry

https://kyndinfo.notion.site/Various-distances-d755a0e4065c457ab5804ea408054b5a?pvs=24
- concept of distance
	- Note: https://kyndinfo.notion.site/Visualizing-Distances-3473b633ad444ec3a17aa6e97c88eaf3?pvs=24
- finding the shortest path to move characters along in game design, or dividing territories based on the distances.
- functions that returns the distance from a point to the surface of object, called signed distance functions,
	- Note: https://kyndinfo.notion.site/Signed-distance-functions-32b6ebf05fb84367ac59b4349f080b4c?pvs=24
- when sketching something with code, Newtonian or Euclidean spaces provide the most intuitive and familiar way of thinking about space
- About Colors
	- Note: https://kyndinfo.notion.site/Spectrum-and-Cones-fd58b78b890840f6bea94a96dc2d6d4b?pvs=24
- Color models
- Most color models today are based on this CIE color space, meaning that the values in a system can be converted to values in XYZ.
- RGB color model that we use on computers today completely fits within the XYZ color space
- The Munsell color system is a system to break down colors by three attributes: hue (such as red, blue, and green), value (lightness), and chroma (vividness or purity of the color). The many color models we use on computers are similar to Munsell’s model, but are designed to be able to be mapped to the RGB values on the screen and thus to XYZ values.
	- Note: https://kyndinfo.notion.site/Various-Color-Models-804844f6e8b9475aab4dff0093027080?pvs=24
- Computing colors
	- Note: https://kyndinfo.notion.site/Computing-Colors-06ae20de290b4a40865435378e66af7d?pvs=24
- we can add, subtract, multiply, or rotate colors.
- to process colors to get the desired tone is a critical skill in image and video production.
	- Note: https://kyndinfo.notion.site/Color-Processing-9b774e71da0043e69dc9c8575abd93bf?pvs=24
- Mixing colors
	- Note: https://kyndinfo.notion.site/Mixing-Colors-907fec97f46c40539cc70cad22679e42?pvs=24
- bunch of “blending modes” such as add, multiply, screen, overlay, etc. These are different ways to calculate a new color based on the input colors.
- color mixing in the real world is the result of various materials reflecting, refracting, and absorbing light.
- Light
- To fully understand how colors happen to us, we must understand how light travels from its source to our eyes, bouncing off surfaces while reflecting and refracting along the way.
	- Note: https://kyndinfo.notion.site/Reflection-and-Refraction-e1e85f98e2c4423b90d9aa33e690eafa?pvs=24
- Reflection and Refraction
- When the light hits an object, the object absorbs some of the light and reflects the others.
- On transparent objects, some also passes through.
- If the material absorbs red and yellow spectrums of light more than blue, then the object will look blue.
- Rough surfaces will scatter the light in all different directions,
- smooth surfaces will mirror the surroundings more clearly.
- better control the colors and appearance of your rendering.
	- Note: https://kyndinfo.notion.site/Reflection-and-Refraction-e1e85f98e2c4423b90d9aa33e690eafa?pvs=24
- Filling Space with Colors
	- Note: https://kyndinfo.notion.site/Filling-Space-with-Colors-119019e814cf801187eff0d403c99248?pvs=24
- About Motion
- draw both in space and time.
- Newtonian Mechanics
- Newton basically said that things stay at rest in the same position, or keep moving at the same velocity until you apply force to accelerate them.
- Position, velocity, acceleration, and force are the most fundamental concepts to understand physical motion.
- frame by frame, just add force to acceleration to change it, then acceleration to velocity, then velocity to position.
	- Note: https://kyndinfo.notion.site/Newtonian-mechanics-7021a67f35004bafb54f86b7821b7e36?pvs=24
- Differentiation and Integration
- Position, velocity, acceleration, and force are in relationships of differentiation and integration.
- Differentiation is the rate of change,
	- Note: https://www.notion.so/Differentiation-3409ee287a94491ea587508a32df7200?pvs=21
- integration is the accumulation of changes.
	- Note: https://www.notion.so/Integration-dde2beec57974b1bbc86b1005c44ea1b?pvs=21
- velocity
- how much position will change at a certain moment,
- position is the result of velocity being applied and accumulated over time.
- numerical integration, which breaks down the changes into simple additions per small amount of time.
- proper way to solve differentiation and integrations by solving equation is called analytical solution.
- the approximation by dividing the changes over a small amount of time is called numerical approximation.
- Any system involving external factors, like human interaction, cannot be determined in advance.
- approximate smooth motion through discrete changes,
- the results can go slightly off from physically accurate motion.
- several ways to minimize this problem.
- Improved Euler method
- and Runge-Kutta method
	- Note: https://en.wikipedia.org/wiki/Runge%E2%80%93Kutta_methods
- Runge-Kutta).
	- Note: https://kyndinfo.notion.site/Continuous-Time-and-Discrete-Time-85fdbc5547e8496594524161c3c628e9?pvs=24
- Tween
	- Note: https://kyndinfo.notion.site/Interpolation-and-Animation-44d00edd89bc41d686260d6bfd6a01d9
- Great animators and motion designers often exaggerate movement and timing, bending or ignoring realism to create something more expressive or impactful.
- called tweening, short for in-betweening.
- You start from defining a start and end state, then fill the intermediate frames by interpolating between them.
- In computer animation, we often use easing functions to control these transitions.
- Easing functions connect one value to another, changing the pace in between, like slowing in, speeding out, bouncing,
- easing function as a kind of mapping between time and another value, such as position, scale, or opacity.
- Constraints
- Adding constraints to objects is a way to add reality to the motion.
- Verlet Integration is a way to create simple physics simulations by connecting dots with sticks which constrains the distance between two points.
- by combining multiple points and sticks, you can create various kinds of objects from rigid bodies to soft string-like objects.
	- Note: https://kyndinfo.notion.site/Building-Ragdolls-8506d6282e4943a2925a123e5d22bdcd?pvs=24
- control movement more precisely and intentionally, you might want to study kinematics.
- Forward kinematics and inverse kinematics
	- Note: https://kyndinfo.notion.site/Kinematics-fae9b5fd62004afa97156bedd7a95479?pvs=24
- to describe the motion of jointed parts, such as mechanical arms or human bodies.
- Both methods handle structures made of multiple segments and joints to connect them.
- Forward kinematics starts from the root of the connection and propagates the posture going forward to the end.
- directly manipulate the rotation of each joint, and that will determine the overall movement.
- Inverse kinematics is more goal-driven.
- define where you want the endpoint to be, then the algorithm figures out the rotation of each joint that makes the desired result happen.
- you can always introduce some randomness to your design.
- In real applications, you might want to combine more predictable methods like above with some randomness.
	- Note: https://kyndinfo.notion.site/Taming-Randomness-e4351f08ec7c43a7ad47ef2d1dfe2ed8?pvs=24
- Camera in Motion
	- Note: https://kyndinfo.notion.site/Camera-in-Action-11d019e814cf802ca8e4ea683733c4b8?pvs=24
- How you frame the scene and position the viewpoint dramatically shapes the final result.
- Sketching with motion
- Whether you follow the rules of physics, break them for expressiveness, or invent your own systems, motion opens a lot possibilities for exploration and creativity.
- Light and sound are both waves,
- frequency affects what we perceive,
- Sound frequencies are perceived as pitch, and we describe them as “high” or “low.”
- different frequencies of light appear to us as different hues of colors without any sense of high or low frequency.
- Colors
	- Note: https://kyndinfo.notion.site/Computing-Colors-06ae20de290b4a40865435378e66af7d?pvs=24
- Sound
- Sound is also a wave.
- Lower frequencies feel “low,” and higher frequencies feel “high.” This height of sound is called pitch.
- we don’t experience pitch as just a straight line—it feels more like a spiral.
- if you start at 440 Hz (the A note) and go up, you’ll eventually hit another A at 880 Hz at exactly double the frequency. It’s not the same sound, but we hear it as the same note, just in a higher octave.
- Western music typically divides the octave is into 12 pitches,
	- Note: https://kyndinfo.notion.site/Pitch-and-Frequency-9792f391b97e427eaccea6cabd6cf8c5?pvs=24
- spaced evenly in terms of frequency ratio.
- Other musical cultures divide the octave differently.
- Not just pitch, we can also tell sounds apart based on their timbre, which is like the texture or color of a sound.
- how you can tell apart different sounds, like a bird chirping, car horns, or instruments like piano and trumpet.
- “sound color.”
- Both pitch and timbre are tied to the physical characteristics of the thing that’s making the sound.
- guitar string as an example.
- The pitch depends on its length and weight.
- The longer or heavier the string, the lower the pitch.
- The main pitch is called the fundamental frequency,
- parts of the string also vibrate in smaller sections—halves, thirds, quarters, etc. These create harmonics or overtones, which are simple multiples of the base frequency.
- Just like colors are usually a blend of frequencies, sounds are too.
- we can tell a violin from a flute, or recognize someone’s voice, or know what kind of object made a noise, based on how that sound’s overtones are structured regardless of the frequency.
- Understanding wave properties helps us better comprehend the relationship between physical vibrations and the sounds that we hear, and sketch ideas playing around with and visualizing sound.
	- Note: https://kyndinfo.notion.site/Sound-visualization-c6b25aa7a81f47adabd2c7aab3ce501f?pvs=21

https://kyndinfo.notion.site/Sine-waves-and-Additive-Synthesis-80562e2ec05c4cc0b109691dea3201d7?pvs=21

https://kyndinfo.notion.site/Fourier-Series-caa91c112da043888cbe45f18392caff?pvs=21
- Magnitude and Logarithm
- the relationship between physical quantities and their impact on human perception is logarithmic in many cases.
- Physically, a sunny day outdoors can have 200 times more light than a well-lit office. But does it feel 200 times brighter? Probably not.
- The same goes for sound. Loudness is related to the energy of the sound, which is directly related to the amplitude of the sound wave.
	- Note: https://kyndinfo.notion.site/Physical-values-and-human-perception-54d4ccb31a9b466d8c9e77a57913baa2?pvs=24
- Life doesn’t evolve with purpose.
- A statement like “giraffes acquired long necks in order to eat leaves high up” is misleading. The reality is more like something random happened to the genes, and that change happened to give the genes themselves a better chance to be passed on to following generations.
- Resolution
- Resolution is how detailed something can be represented or perceived.
- computer displays are made of small dots.
- when these dots are small enough — somewhere around 300 DPI（dot per inch) at reading distance, or a viewing angle of 1 arcminute (1/60 degree) — our eyes and brain stop seeing the dots and start to see images and characters.
- Movies have only 24 frames per second, but that’s enough to make us believe they are smooth and real.
- majority of digital audio uses 44,100 samples per second, which means a second of sound is represented by 44,100 numbers.
- 20,000 Hz, which is about the upper limit of pitch that humans can hear.
- If humans had different capabilities, these technologies could have been designed differently.
- even when there isn’t enough resolution, our brain often try to see continuity by complementing the missing details.
- Sometimes, letting the brain fill in the gaps is better than trying to draw everything in detail and having the illusion fall apart by having discrepancies here and there.
- When we sketch with code, we are always engaging with how humans perceive things.
- helps us see things and make things from different perspectives.
- Patterns
- Humans are wired to spot patterns.
- Repeating patterns are fundamental to design and art.
- Checkers, stripes, and other repeating motifs appear universally in decoration and textiles.
- Musicians create structure through rhythms, phrases, and chord cycles.
- Following patterns makes things predictable. It is often relaxing and comforting,
- intense rhythm can also bring energy and even trance.
- Breaking a predictable rhythm creates tension, drawing people’s attention,
- going back and forth between tension and familiar patterns is a way to drive a song or a story.
- Repetition
- basis of patterns is repetition.
- many methods to create and handle repetitions mathematically and programmatically.
- modulo is basically a mathematical way of saying “count to n then go back to one and repeat,” which is just dividing a number by another number and taking the remainder.
- basis for many repeating patterns, such as repeating tiles and musical rhythms below.
- repetition of continuous values.
	- Note: https://kyndinfo.notion.site/Repetition-60e4c6223b424948893b4a0d9368d4d0?pvs=24
- Sine waves
	- Note: https://kyndinfo.notion.site/Sine-waves-and-Additive-Synthesis-80562e2ec05c4cc0b109691dea3201d7?pvs=21
- The sine wave is another fundamental building block for repeating patterns.
- with an infinite set of sinusoidal waves, each with its own frequency, amplitude, and phase, you can synthesize any pattern in theory.
- idea is called the Fourier series for repeating patterns
- Fourier transform for ones that don’t.
	- Note: https://kyndinfo.notion.site/Fourier-Series-caa91c112da043888cbe45f18392caff?pvs=21
- you’ll bump into them in many places, such as audio and signal processing, and a whole lot of physics.
- Tiling
- patterns. By repeating the same elements in a space, or dividing a space based on some rules, we can create various interesting patterns that can continue forever.
- simple repetition of the same geometric shapes to something more unique and interesting like M. C. Escher’s
- Penrose tiles or Truchet tiles.
- A Voronoi diagram is a method to create more organic patterns.
- Cells in Voronoi diagrams are all different,
- Rhythm
	- Note: https://kyndinfo.notion.site/Rhythm-cb009f19d2b84fd1bd0cb5d8474cf022?pvs=24#53fea47c5d3b4aa4b5a695fd7887ab8f
- Instead of dividing space, we can create musical rhythm by dividing time.
- Even within the same tempo and time signature, time can be divided differently, and the way you divide dictates the “feel” of the rhythm.
- Many players also adjust the timing slightly off from the exact timing naturally or intentionally to create add more nuances, such as heavy or bouncy rhythms.
- Music has many layers of repetition beyond basic drum loops.
- rhythmic and melodic patterns of phrases, song structure is built by repeating different sections,
- Randomness
- nothing follows a perfectly regular pattern.
- Randomness is a great tool that can help make our sketches more interesting and natural.
- many different ways to “shape” randomness for your purpose.
- the more the sum or average will converge to a certain expected value.
	- Note: https://en.wikipedia.org/wiki/Law_of_large_numbers
- You can also apply some function to random results to adjust the distribution.
	- Note: https://kyndinfo.notion.site/Taming-Randomness-e4351f08ec7c43a7ad47ef2d1dfe2ed8?pvs=24
- if you take a square of a random floating number from 0.0 to 1.0, you get this shape.
- Can you see the difference between these two cityscapes? These are made by using the exact same regular grid with two different functions that give them subtly different impressions.
- Noise Functions
	- Note: https://kyndinfo.notion.site/Noise-function-e4351f08ec7c43a7ad47ef2d1dfe2ed8?pvs=24#f64e868f4f02463fb7667509ae54d740

https://kyndinfo.notion.site/Reading-a-Noise-Function-1f8019e814cf80ecaa40c37ec78c77aa?pvs=21

https://kyndinfo.notion.site/Drawing-Landscape-1d0019e814cf807f984ef8012fba591b?pvs=21
- Noise functions are methods to get randomly but continuously changing, like the up and down of terrain, the change of temperature, or the direction an animal wanders.
- but unlike dice rolls, they look smoothly connected and values next to each other seem to be somehow related.
- many noise function algorithms, but most major ones share a simple idea of smoothly connecting random numbers.
- the values are random, but if you pick a point close to another, they return relatively close values, and there is no abrupt jump, or discontinuity between them.
- Noise functions are often layered by adding them together at different scales to create a more natural look.
- Imagine a mountain range. From far away, you see its jagged silhouette. As you hike closer, you start to see smaller ridges, and up close, you notice every rock face has tiny cracks and ledges that are similar to larger forms.
- common pattern in nature for things to repeat similar shapes at many levels of zoom.
- rolling clouds, breaking waves, cracked desert ground, leaf veins, and the shape of coastlines.
- Fractal
- A fractal is a pattern or shape that repeats the same structure at different scales, in such a way that a part of the shape resembles the whole, and a sub-part of a part resembles the larger part.
- Layering of noise functions can be seen as a way to emulate the fractal nature of the real world with a finite number of computations
- Mandelbrot set or Julia set, have literally infinite details.
- blurry photo
	- Note: https://kyndinfo.notion.site/Resolution-cb009f19d2b84fd1bd0cb5d8474cf022?pvs=24
- data compression?
- technologies like ZIP, JPEG, or MP3 borrow the basically same trick. They hunt for repeated structure in data, toss the redundant bits, and keep a smaller blueprint.
- And AI image generation. The foundational idea of diffusion models is to show the AI the process of adding noise to an image until it becomes unrecognizable, and have it learn the backward process to re-imagine plausible details of images from noise.
- patterns what let us make sense of the world. They are so crucial for us to grasp and organize information.
- leaning to match on patterns can make us overlook the details that matter, sliding into stereotypes and snap judgments.
- useful practice is to jump between levels.
- Spotting big patterns while appreciating the subtle differences, nuances, and noise without falling into excessive generalizations.
- About Interpolation
- Interpolation is about estimating the values that lie between the points you already know.
- When you’re moving a character from point A to B, you interpolate between them so you know where the character is at a given time.
- Linear Interpolation
	- Note: https://kyndinfo.notion.site/Linear-Interpolation-44d00edd89bc41d686260d6bfd6a01d9?pvs=24#22519d75d27644fdbf13e66c22829349
- the value changes at the same rate all the way.
- Suppose that point P moves from one point A to another point B, and the variable t is the ratio how much P has moved between them.
- If t = 0, P is in the same position as A. If t = 1, P is in the same position as B, and if t = 0.5, P is exactly at the midpoint between A and B.
- Easing functions
	- Note: https://kyndinfo.notion.site/Easing-functions-f0219558d6a649a4acf8c09f5001c527?pvs=21
- To manipulate the rate, we use different functions called easing functions.
- they can be any function that can map a range of values (usually 0 to 1) to the same range continuously, keeping the start and end the same.
	- Note: https://kyndinfo.notion.site/Mapping-18e019e814cf803bacf3f79096d6d82b?pvs=21
- Bézier and Spline
	- Note: https://kyndinfo.notion.site/B-zier-and-Spline-9f1cdf1b432c4f09801ed5fcad0d70f8?pvs=24
- Defining a path between points in flexible but precise way is very crucial for computer graphics to draw lines and shapes.
- most common methods called Bézier curve is basically to repeat linear interpolations multiple times. The demo below illustrates this idea.
- many different methods to draw curved lines similar to Bézier curves but with more advanced features. For example, B-spline introduces additional parameters to adjust the weights of each point to add more nuanced control over the line’s shape.
	- Note: https://kyndinfo.notion.site/B-Spline-B-9f1cdf1b432c4f09801ed5fcad0d70f8?pvs=24#775cb52fa3f445d9a2ffba8c91ae9ce3
- Smoothness and Continuity
- When we draw curves, we often care how smooth they are.
- to deal with a specific kind of smoothness, there is a very useful mathematical concept called continuity.
- To measure how smooth a curve is in a mathematical sense, you can take the derivative of the function that represents the curve.
- first derivative shows the rate of change of position, and the second derivative shows the rate of change of the rate of change.
- An algorithm called natural spline is designed to guarantee C2 Continuity
	- Note: https://kyndinfo.notion.site/Controlling-curves-69ce2d8dc720457ba7cd9392e350dbce?pvs=24
- The Hobby curve algorithm minimizes curvature at each point along the line,
- Smoothstep functions
- For connecting lines or interpolations smoothly, Hermite interpolation, or so-called smoothstep functions are often used.
- When t moves from 0 to 1, these functions can adjust the rate of change to make the derivative at the beginning and the end be zero.
- The first formula guarantees C1 continuity and the second one is for C2, the last one is the general form for any level of continuity.
- if you look at the graphs below, you can visually confirm that the rate of change becomes zero.
- Interpolation for many arbitrary points
	- Note: https://kyndinfo.notion.site/Continuous-Mapping-1ca019e814cf80d4920dd10f57622dc2?pvs=24
- methods to use algorithms to figure out the exact way to interpolate between points.
- useful when there are multiple data points spread across a space.
- RBF interpolation
- It solves for weights automatically and produces a smooth surface
- Mixing Colors
	- Note: https://kyndinfo.notion.site/Mixing-Colors-907fec97f46c40539cc70cad22679e42?pvs=24
- You can mix two or more colors by interpolating between them.
- draw a curved line in a color space to get an interesting gradient.
- Interpolating everything
- you can interpolate between anything that can be represented as vectors.
- By seeing things through the lens of concepts like vectors and interpolation, we can treat many things in the same way
- Interpolation is indeed a powerful and versatile technique to add to your toolbox.
- extrapolation.
- extrapolation is to extend a line beyond the ends. Extrapolation are used to predict values beyond the boundary of known data points
- About Wave
	- Note: https://kyndinfo.notion.site/Wave-be9d50efaf8a4a039ae08121a4ea00a8?pvs=24
- Waves are everywhere. I suppose the word originally meant just waves on the water surface, like the ocean or a lake.
- there are many other things that exhibit characteristics of waves, such as sound, earthquakes, electromagnetic waves, and light.
- Sine Wave
- Mathematically, the sine wave is the most fundamental wave shape.
- It represents the position of a point on a unit circle as the center angle changes.
- sine curve can be drawn as a result of a physical object following the spring equation (Hooke’s law, F=-kx).
- means if you vibrate a thing attached to a spring and plot its position over time, you get a sine curve.
- Vibration and Propagation
- Waves propagate and spread in space.
- Many waves are mechanical, meaning they are caused by physical materials pushing against each other.
- When you pluck a guitar string, it vibrates and pushes the air around, which pushes the air next to it, and so forth.
- Sound is propagated across a room as oscillations of air pressure this way. Earthquakes, ocean waves, etc., all belong to this category.
	- Note: Light
- Electromagnetic waves are a different class of wave that needs no material medium at all.
- properties of both particles (photons) and waves.
- Light, radio, microwaves, X‑rays, etc. are the same phenomenon at different frequencies.
- What oscillates is simply the electric (E) and magnetic (B) fields themselves.
- Even without a medium, electromagnetic waves still obey the same wave physics, such as reflection, refraction, interference, diffraction.
- The concept of “wave” is an abstraction to capture these common characteristics between different things and phenomena. It’s not that they behave the same because they are waves, but we call them waves because they follow the same rules.
- Electromagnetic waves between about 400–800 terahertz are what we normally think of as light,
- visible to human eyes.
- Seeing Sound Waves Sound is also a wave.
	- Note: https://kyndinfo.notion.site/Sound-visualization-c6b25aa7a81f47adabd2c7aab3ce501f?pvs=24
- In the case of light, the frequency corresponds to the color. In sound, the frequency corresponds to the pitch, how high or low it sounds, and the amplitude affects the loudness.
- Numbers and Intervals
- Musical intervals are based on frequency ratios.
- The equal temperament commonly used in Western music divides an octave evenly into 12 semitones.
- the ratio of the frequency from one note to its right neighbor (e.g., C to C#) is 21/12.
- With the semitone as a unit, we can think of the distance between notes as a simple number relationship.
- Interestingly, we don’t experience pitch as just a straight line—it feels more like a spiral.
- you start at 440 Hz (the A note) and go up, you’ll eventually hit another A at 880 Hz at exactly double the frequency.
- It’s not the same sound, but we hear it as the same note, just in a higher octave.
- construct different harmonies. It is all about ratio and relative relationships,
- depending on how you lay them out vertically (play at the same time) or horizontally (play in sequence),
	- Note: https://kyndinfo.notion.site/Pitch-and-Frequency-9792f391b97e427eaccea6cabd6cf8c5?pvs=21

https://kyndinfo.notion.site/Numbers-and-Intervals-9da3659937e8468aa5a32d232d7fd0bb?pvs=21

https://kyndinfo.notion.site/The-secrets-of-sound-for-kids-14a019e814cf80e5a6e5ea1255f13e26?pvs=21
- Timbre
- Other than the pitch and loudness, sound also has timbre, which is like the texture or color of a sound.
- Timbre comes from the fact that most of the sound don’t consists of a single frequency, but rather a mix of many different frequencies.
- balance between these different frequencies determines the timbre.
- you can see the shape of the wave changes as we add extra sine waves with different frequencies and amplitudes (the radius of the circle), in this case, getting closer to a so-called square wave.
	- Note: https://kyndinfo.notion.site/Sine-waves-and-Additive-Synthesis-80562e2ec05c4cc0b109691dea3201d7?pvs=24
- Fourier Series
- you can synthesize any periodic pattern in theory.
- called the Fourier series for repeating patterns and the Fourier transform for ones that don’t.
- By applying Fourier transform to sound data, we can determine the amount of different frequencies contained within it.
	- Note: https://kyndinfo.notion.site/Sine-waves-and-Additive-Synthesis-80562e2ec05c4cc0b109691dea3201d7?pvs=21

https://kyndinfo.notion.site/Fourier-Series-caa91c112da043888cbe45f18392caff?pvs=21
- Navier-Stokes equations
- The Navier-Stokes equations describe the properties and behavior of media such as water and air, including mass conservation, momentum conservation, and viscosity.
- how waves work in these media,
- often used for fluid simulation. Understanding and simulating waves using the Navier-Stokes equations can be a fun and interesting research topic.
	- Note: https://kyndinfo.notion.site/Fluid-Simulation-f0516d9d12e245a08ae5c7545ac822dd?pvs=24
- About Shapes
- Geometric Drawings
- Understanding basic shapes gives us a foundation for drawing many other more complex shapes.
	- Note: https://kyndinfo.notion.site/Geometric-Drawings-2cefb8d81ced41d5af532dd7bdfdceee?pvs=24
- Repeating them in patterns is a major vocabulary of decorative and graphic design.
	- Note: https://kyndinfo.notion.site/Tiling-6bc7c5c29dc442a4ab3c63c233f00ca7?pvs=24
- Detecting Collision
- we often use geometric shapes as proxies for more complex shapes as well.
- detect object intersections.
- We usually use basic shapes like circles, triangles, rectangles, and combinations of them to approximate complex shapes at different precisions as needed.
- Various methods of checking whether figures overlap are used to detect collisions between objects in physics simulations and games.
	- Note: https://kyndinfo.notion.site/Detecting-Collision-7c8c74926f824b2bb310b08988a384a7?pvs=24

https://developer.mozilla.org/en-US/docs/Games/Techniques/3D_collision_detection?utm_source=chatgpt.com
- Curves
- Curves are obviously a very essential tool for sketching.
- curves have infinite possibilities and are much harder to handle.
- Cumulative Curves
	- Note: https://kyndinfo.notion.site/Cumulative-Curves-2b00ce52283b4802b354d72aff191745?pvs=24
- most common ways that curves occur in the physical world is through cumulative motion or buildup, meaning a point starts moving from one location and changes its course over time.
- Parametric Approaches
	- Note: https://kyndinfo.notion.site/Parametric-Approaches-990cdedc884b4e5e831e4c9da4c70040?pvs=24
- In the parametric approach, a shape or curve is defined mathematically using one or more parameters. By varying these parameters, you can generate points that make up the shape.
- if the parameter is called t, you can get all the points from beginning to end by moving t within a certain range.
- Bézier and Spline Among
- spline curve is a mathematically defined curve that smoothly passes through or is close to a series of control points.
- many variations including Bézier curves, B-spline curves, NURBS (Non-Uniform Rational B-Splines), Cardinal Splines, Catmull-Rom Splines, Hermite Splines, etc.
	- Note: https://kyndinfo.notion.site/B-zier-and-Spline-9f1cdf1b432c4f09801ed5fcad0d70f8?pvs=24
- Controlling curves
- Signed distance functions
	- Note: https://kyndinfo.notion.site/Signed-distance-functions-32b6ebf05fb84367ac59b4349f080b4c?pvs=24
- A SDF is a function that can tell you how far a point is from a surface of a shape, say a sphere (usually in Euclidean space)
- the distance of a point of from the surface of a sphere can be expressed as below where p is the coordinate of the point, c is the center of the sphere, and r is the radius:
- SDF is the technique used as basis for many mind-blowing 3D graphics
- 3D rendering with SDF
	- Note: https://kyndinfo.notion.site/Projection-and-3D-Rendering-3D-42439e1db7f34cb094375cc7f741e756?pvs=24

https://kyndinfo.notion.site/Reading-Raymarching-Primitives-124019e814cf807084b4df5cd8d1e250?pvs=24

https://kyndinfo.notion.site/Drawing-Landscape-1d0019e814cf807f984ef8012fba591b?pvs=24
- Noise and Fractal
	- Note: https://kyndinfo.notion.site/Reading-a-Noise-Function-1f8019e814cf80ecaa40c37ec78c77aa?pvs=24
- Exploring more shapes
- Polygons: I guess you know almost all 3D gaming characters are made of a bunch of triangles.
- Defining 3D shapes as a collection of tiny polygons (usually triangles but can be quads or other shapes) is such a common method.
- I recommend building basic tools yourself to learn the fundamentals.
- Conclusion
	- Note: https://kyndinfo.notion.site/Sketching-with-Math-and-Quasi-Physics-837e231967134bb5a8307bb9f41c8ea1

https://kynd.github.io/p5sketches/index.html

# Form+Code
File: Form+Code in Design, Art, and Architecture by Chandler Casey Reas (z-lib.org).pdf  
  
Annotation summary:  
  
--- Page 13 ---  
  
Highlight (color #FFBB01):  
an algorithm, procedure, or program— defi nes a specifi c process with enough detail to allow the instructions to be followed.   
  
Highlight (color #FFBB01):  
precise way of explaining how to do something.   
  
Highlight (color #FFBB01):  
pattern for knitting a scarf as an algorithm  
  
Highlight (color #FFBB01):  
Hiking Directions to Point Break  
  
From the North: - Follow the trail from the Nature Center - Turn right at the Water Tower, walk until you see the Old Oak Tree - Follow directions from the Old Oak Tree  
  
Highlight (color #FFBB01):  
There are many ways to write an algorithm.   
  
Highlight (color #FFBB01):  
there are always multiple ways to get from point A to point B  
  
Highlight (color #FFBB01):  
An algorithm includes decisions  
  
Highlight (color #FFBB01):  
A complex algorithm should be broken down into modular pieces  
  
Highlight (color #FFBB01):  
often divided into small units to make them easy to follow  
  
Highlight (color #FFBB01):  
What is Code? What is Code?  
  
Highlight (color #FFBB01):  
THE ALGORITHM  
  
Hiking Directions to Point Break  
  
From the North: - Follow the trail from the Nature Center - Turn right at the Water Tower, walk until you see the Old Oak Tree - Follow directions from the Old Oak Tree  
  
From the South: - From the Pinic Grove, follow the Botany Trail - Turn right on the South Meadow Trail - Turn right on the Meadow Ranch Trail, walk until you see the Old Oak Tree - Follow directions from the Old Oak Tree   
  
From the Old Oak Tree: - Follow the path under the tree - Turn right onto the Long Hill Trail - Follow the trail until you reach Point Break  
  
What is Code? What is Code? 13  
  
WHAT IS CODE?  
  
THE ALGORITHM  
  
  
--- Page 15 ---  
  
Highlight (color #FFBB01):  
codes they use are intended to be read and understood by people  
  
Highlight (color #FFBB01):  
there can only be one interpretation of every piece of code.  
  
Highlight (color #FFBB01):  
Unlike people, computers are not able to guess or interpret a meaning if it's not stated exactly.   
  
Highlight (color #FFBB01):  
Before a piece of code can be run on a computer, it must be converted from a human-readable format to a computer-exe-cutable format; these are sometimes called machine code, binaries, or executables.   
  
Highlight (color #FFBB01):  
This conversion transforms the code into software.  
  
Highlight (color #FFBB01):  
Machine-based code is usually represented as a series of 1s and 0s:  
  
0001 0001 0000 1001 0000 0001 0000 1110 0000 1001 1100 1101 0000 0101   
  
Highlight (color #FFBB01):  
translation is required for the com-puter to be able to follow the instructions.   
  
Highlight (color #FFBB01):  
Each bit (1 or 0) is grouped into bytes (a sequence of eight bits) that defi ne how the computer makes calculations and moves data into and out of the processor.   
  
  
--- Page 17 ---  
  
Highlight (color #FFBB01):  
THINKING IN CODE What is Code? What is Code? 17  
  
WHAT IS CODE?  
  
THINKING IN CODE  
  
Highlight (color #FFBB01):  
tools to aug-ment the body  
  
Highlight (color #FFBB01):  
Software is a tool for the mind.  
  
Highlight (color #FFBB01):  
using software is not only about increasing our ability to work with large volumes of information; it also encourages new and different ways of thinking.   
  
Highlight (color #FFBB01):  
procedural literacy  
  
Highlight (color #FFBB01):  
“the ability to read and write processes, to engage procedural represen-tation and aesthetics.”  
  
Highlight (color #FFBB01):  
act of communication and a symbolic way of representing the world.  
  
Highlight (color #FFBB01):  
system of rules that defi ne a space of possible forms or actions.  
  
Highlight (color #FFBB01):  
one authors code that enforces rules to generate some kind of representation  
  
Highlight (color #FFBB01):  
Procedural systems generate behaviors based on rule-based models; they are machines capable of producing many outcomes, each conforming to the same overall guidelines.3  
  
Highlight (color #FFBB01):  
The primary complexity involved in creating the game is not technical; it's about choreographing all of the components into a coherent and enjoyable experience.   
  
Highlight (color #FFBB01):  
Each programming language is a dif-ferent kind of material to work and think with.   
  
Highlight (color #FFBB01):  
The syntax (or grammar) of each program-ming language structures what is possible within that language.  
  
Highlight (color #FFBB01):  
Different programming languages encourage programmers to think about their work through the affordances (or action possibilities) and constraints of that language.  
  
Highlight (color #FFBB01):  
In each of these programming environments, draw-ing a triangle requires a different approach and understanding of space.  
  
Highlight (color #FFBB01):  
many reasons why one programming language may be preferred over another.  
  
Highlight (color #FFBB01):  
some languages allow code to be written faster, but this is usually at the expense of how fast the code is capable of running  
  
  
--- Page 19 ---  
  
Highlight (color #FFBB01):  
Although both languages allow the same shapes to be drawn, BASIC promotes objectivity, while LOGO fosters exploration.   
  
Highlight (color #FFBB01):  
run the code mentally, which is a useful skill for developing procedural literacy.  
  
Highlight (color #FFBB01):  
Visual programming languages (also called graphical programming languages) provide an alternative way of thinking with code.   
  
Highlight (color #FFBB01):  
Writing a program with a visual program-ming language is similar to making a diagram instead of writing a text.   
  
Highlight (color #FFBB01):  
Three of the most popular visual programming languages within the arts—Max, Pure Data, and vvvv  
  
  
--- Page 21 ---  
  
Highlight (color #FFBB01):  
CODE AND THE ARTS   
  
7 Seymour Papert, The Children's Machine: Rethinking School in the Age of the Computer (New York: Basic Books, 1994), 157.   
  
8 Jack Burnham, Software— Information Technology: Its New Meaning for Art (New York: The Jewish Museum, 1970), 10.   
  
9 The New Media Reader (Cambridge, MA: MIT Press, 2003), 255.  
  
CLOUD PIECE Imagine the clouds dripping. Dig a hole in your garden to put them in.  
  
1963 Spring  
  
Electronic Numerical Integrator And Computer (ENIAC), 1943–46 The first digital computers were very different from modern   
  
computers. ENIAC cost almost $500,000 and weighed over thirty tons. This U. S. Army photo shows two of the computer's programmers.  
  
Cloud Piece, by Yoko Ono, 1963 Ono's artwork is the instructions. The reader imagines or performs the actions.  
  
What is Code? What is Code? 21  
  
WHAT IS CODE?  
  
CODE AND THE ARTS  
  
Highlight (color #FFBB01):  
The software desires of designers, architects, and artists are often different from those of scientists, mathemati-cians, and engineers.   
  
Highlight (color #FFBB01):  
software, such as dematerialization and system aesthetics.   
  
Highlight (color #FFBB01):  
they deal with   
  
underlying structures of communication and energy exchange  
  
Highlight (color #FFBB01):  
Levine claimed that images are hardware, and that information about the images is software.  
  
Highlight (color #FFBB01):  
Mel Bochner, John Cage, Allan Kaprow, Sol LeWitt, Yoko Ono, and La Monte Young  
  
Highlight (color #FFBB01):  
conceptual and process-based art by writing instructions and creating diagrams as a form of art  
  
Highlight (color #FFBB01):  
Like programmers, these creators all wrote instructions for actions.  
  
  
--- Page 23 ---  
  
Highlight (color #FFBB01):  
Stan VanDerBeek and Lillian F. Schwartz  
  
Highlight (color #FFBB01):  
computer-generated fi lm, Permutations, was created in 1966 by John Whitney Sr. using GRAF  
  
Highlight (color #FFBB01):  
uence of code is not limited to the screen and projected image. It is also felt in physical space  
  
Highlight (color #FFBB01):  
Code is used to control elements of products, architecture, and installations.  
  
Highlight (color #FFBB01):  
used to create fi les that are output as prints and made physical through computer-controlled machines that cut and assemble materials, includ-ing wood, metal, and plastic.  
  
  
--- Page 25 ---  
  
Highlight (color #FFBB01):  
Using the computer to reduce the amount of time needed to create a complex, repeti-tive composition was often the motivation for the early adoption of software and its integration into the creative process.  
  
Highlight (color #FFBB01):  
an intel-lectual and active creative partner that, when fully exploited, could be used to produce wholly new art forms and possibly new aes-thetic experiences.”10  
  
Highlight (color #FFBB01):  
to realize a new or unique vision requires that artists and designers exceed the limitations of existing tools.  
  
Highlight (color #FFBB01):  
Each existing form of media—whether drawing, printing, or television—is capable of assuming new qualities of expression.  
  
Highlight (color #FFBB01):  
Games  
  
Highlight (color #FFBB01):  
new media aren't just mechanical gimmicks for creating worlds of illusion, but new languages with new and unique powers of expression  
  
Highlight (color #FFBB01):  
Learning to program and to engage the computer more directly with code opens the possibility of not only creating tools, but also systems, environments, and entirely new modes of expression  
  
Highlight (color #FFBB01):  
computer ceases to be a tool and instead becomes a medium.   
  
  
--- Page 27 ---  
  
Highlight (color #FFBB01):  
Exploring new possibilities  
  
  
--- Page 29 ---  
  
Highlight (color #FFBB01):  
make use of constraints in order to form new relation-ships between elements and to force them to behave in specifi c ways  
  
Highlight (color #FFBB01):  
Some people felt that the draw-ings produced by CAD machines were cold and overly technical, preferring the “slightly wobbly line work and imprecise endings of hand-drawn lines.”  
  
  
--- Page 31 ---  
  
Highlight (color #FFBB01):  
computer increasingly became a tool for collaboration.   
  
Highlight (color #FFBB01):  
If computers could be used to model what we know, then perhaps we could also use them to simulate what we don't know.  
  
Highlight (color #FFBB01):  
objects are no longer designed but calculated  
  
  
--- Page 33 ---  
  
Highlight (color #FFBB01):  
requires a general knowledge of how form is manipu-lated by the computer  
  
Highlight (color #FFBB01):  
computers rely on the ability to specify everything in numerical terms.  
  
Highlight (color #FFBB01):  
COORDINATES  
  
Highlight (color #FFBB01):  
The computer needs to know the position of every mark it draws  
  
Highlight (color #FFBB01):  
we typically use Cartesian coordinates.  
  
Highlight (color #FFBB01):  
x-axis runs from left to right, and a y-axis goes from top to bottom.  
  
Highlight (color #FFBB01):  
axes allow us to specify a precise position on the grid using a pair of numbers, normally the x-value followed by the y-value. For example, a point at (5, 10)   
  
Highlight (color #FFBB01):  
SHAPE  
  
Highlight (color #FFBB01):  
Placing a piece of graph paper on the screen is more than just a metaphor. The screen is, in fact, composed of a grid of points called pixels.   
  
Highlight (color #FFBB01):  
One way to draw a form on-screen is to lay the grid of pixels over an image of the form and measure the color value at each pixel in the grid  
  
Highlight (color #FFBB01):  
raster image.   
  
Highlight (color #FFBB01):  
A raster image, which is sometimes referred to as a bitmap, is a complete description of what is shown on-screen at a given resolution.  
  
Highlight (color #FFBB01):  
Resolution refers to how many points make up an image for a given physical size.  
  
Highlight (color #FFBB01):  
numbers, with each one represent-ing the color of one pixel.  
  
Highlight (color #FFBB01):  
image composed of tiles.   
  
Highlight (color #FFBB01):  
two ways to make a tiled image look better: make the tiles smaller or move farther away from the image.   
  
Highlight (color #FFBB01):  
image's form, color, and shape must be converted to numbers in order for it to be useable on a computer.  
  
Highlight (color #FFBB01):  
Raster graphics are an ideal way to store and manipulate photographic imagery, but they suffer from the confi nes of the resolu-tion at which they are created  
  
  
--- Page 35 ---  
  
Highlight (color #FFBB01):  
Vectors graphics use the same Cartesian grid  
  
Highlight (color #FFBB01):  
storing the value for every pixel in the image, they store a list of equations that defi ne the image.  
  
Highlight (color #FFBB01):  
ideal for drafting and preci-sion drawing  
  
Highlight (color #FFBB01):  
forms are described using geometric equations,  
  
Highlight (color #FFBB01):  
they can be scaled and transformed easily and without losing detail.  
  
Highlight (color #FFBB01):  
COLOR  
  
Highlight (color #FFBB01):  
Objects in three-dimensional modeling software  
  
Highlight (color #FFBB01):  
meshes, NURBS (Non-Uniform Rational B-Splines), and subdivision surfaces.  
  
Highlight (color #FFBB01):  
color on-screen is additive, meaning that the more colors you add together, the closer you get to white.   
  
Highlight (color #FFBB01):  
use the primary colors red, green, and blue to create the colors we see on-screen  
  
Highlight (color #FFBB01):  
24-bit color depth allows each base color to be assigned a value from 0 to 255, giving a total of 16,777,216 possible colors  
  
Highlight (color #FFBB01):  
REALISM  
  
Highlight (color #FFBB01):  
One of the fi rst effects mastered was the illusion of a third dimension rendered on a fl at screen. After that came the hidden-surface algorithm for hiding the lines at the back of a model and making it appear solid rather than composed of wire  
  
Highlight (color #FFBB01):  
shading algorithms were developed to create the appearance of smooth surfaces from the hard edges of fl at polygon models.  
  
Highlight (color #FFBB01):  
mathematical model of a camera is at the core of most rendered software images  
  
Highlight (color #FFBB01):  
parameters of these models imitate those of real lenses, such as focal length, fi eld of view, and aperture.  
  
Highlight (color #FFBB01):  
When the image is rendered, the calculated lens optics determines how near or distant the objects appear and distorts the geometry to create perspective.  
  
Highlight (color #FFBB01):  
non-photorealistic rendering  
  
Highlight (color #FFBB01):  
Splines A spline is a type of curve, with a shape defined by the position of control vertices. Splines have a dimen-sionality that affects   
  
how close the curve fits to each vertex  
  
Highlight (color #FFBB01):  
Surfaces can be math-ematically defined in a number of different ways  
  
Highlight (color #FFBB01):  
triangle mesh is a set of connected triangles;  
  
Highlight (color #FFBB01):  
NURBS are   
  
smooth surfaces cre-ated with splines  
  
Highlight (color #FFBB01):  
subdivision surfaces use recursion to make a fine mesh to represent curvature.   
  
  
--- Page 37 ---  
  
Highlight (color #FFBB01):  
PRODUCING FORM Form and Computers Form and Computers 37  
  
FORM AND COMPUTERS  
  
PRODUCING FORM  
  
Highlight (color #FFBB01):  
how the abstract, immaterial, and imperceptible world of code comes into contact with our senses.   
  
Highlight (color #FFBB01):  
the oscilloscope served as the primary device for real-time visual output from the computer  
  
Highlight (color #FFBB01):  
LIGHT  
  
Highlight (color #FFBB01):  
projectors offer a way to immerse the viewer in imagery, augment a physical space, or create nonstandard display shapes such as circles.  
  
Highlight (color #FFBB01):  
rear-projection setup, with the image projected onto the back of a semitransparent screen  
  
Highlight (color #FFBB01):  
good way to allow viewers to approach the image without worrying about casting shadows  
  
Highlight (color #FFBB01):  
An LED is an electronic component that creates light when a current is applied to it.  
  
Highlight (color #FFBB01):  
Oscilloscope Oscilloscopes use voltages to control the movement of an electron beam  
  
  
--- Page 39 ---  
  
Highlight (color #FFBB01):  
entire circuit boards can be “printed” using conductive ink.  
  
Highlight (color #FFBB01):  
producing physical objects out of digital representations  
  
Highlight (color #FFBB01):  
FABRICATION  
  
Highlight (color #FFBB01):  
fabri-cation techniques are used for vastly different purposes and require new ways of thinking about code, space, and structure  
  
Highlight (color #FFBB01):  
laser cutter  
  
Highlight (color #FFBB01):  
In addition to movement in two directions, the power of the laser cutter can be adjusted to etch metal and create intricate burn patterns on wood  
  
Highlight (color #FFBB01):  
CNC milling, Selective Laser Sintering (SLS), stereolithography, and 3-D printing   
  
Highlight (color #FFBB01):  
to create fully three-dimensional objects  
  
Highlight (color #FFBB01):  
CNC milling  
  
Highlight (color #FFBB01):  
In a 3-D printer, a model is created by layering and fusing successive cross sections of material  
  
Highlight (color #FFBB01):  
Layers of powdered material, such as plaster, resin, or even cornstarch or sugars, are deposited and then selectively fused together  
  
Highlight (color #FFBB01):  
Plotters work by moving a drawing implement, typically a pen or brush, over a surface to control its horizontal   
  
and vertical positions with two motors  
  
  
--- Page 43 ---  
  
Highlight (color #FFBB01):  
REPEAT  
  
Highlight (color #FFBB01):  
digital computers are exceptional machines for creating repetition  
  
  
--- Page 45 ---  
  
Highlight (color #FFBB01):  
Repetition is deeply embedded into the lan-guage of computing and therefore intrinsic to the way people are taught to program  
  
Highlight (color #FFBB01):  
10 PRINT “\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \” 20 PRINT “ / / / / / / / / / / / / / / / /”  
  
Highlight (color #FFBB01):  
learn how to program and there-fore never feel the thrill of directly controlling a computer  
  
  
--- Page 49 ---  
  
Highlight (color #FFBB01):  
qUALITIES OF REPETITION  
  
Shape of Song, by Martin Wattenberg, 2002 This visualization depicts musical passages as arches. Each arch   
  
connects identical passages within the composition to expose the patterns that unfold in time as a single image. From top to   
  
bottom, these composi-tions shown are: one of the Goldberg Variations by Johann Sebastian Bach, Frédéric Chopin's Mazurka in F#, the folk   
  
song “Clementine,” Philip Glass's “Candyman II,” and Madonna's “Like A Prayer.”  
  
Repeat Repeat 49  
  
REPEAT  
  
qUALITIES OF REPETITION  
  
Highlight (color #FFBB01):  
Repetition can have a powerful effect on the human body and psyche  
  
Highlight (color #FFBB01):  
universal example is how the beat of a good song will inspire people to dance along  
  
Highlight (color #FFBB01):  
dynamic visual patterns can appear, in subtle ways, to vibrate physically.   
  
Highlight (color #FFBB01):  
repetition encourages our eyes to dance.  
  
Highlight (color #FFBB01):  
to create strong sensations of depth and motion.   
  
Highlight (color #FFBB01):  
Optical art   
  
Highlight (color #FFBB01):  
Pioneers within this movement include Yaacov Agam, Richard Anuszkiewicz, Bridget Riley, Jesús Rafael Soto, and Victor Vasarely.  
  
Highlight (color #FFBB01):  
the use of algorithms  
  
Highlight (color #FFBB01):  
Beyond visual repetition, setting rhythms in time can have strong, palpable effects.   
  
Highlight (color #FFBB01):  
Repetition can also be an important component within time-based works  
  
Highlight (color #FFBB01):  
repetition becomes a form of rhythm.  
  
Highlight (color #FFBB01):  
Granular-Synthesis (Kurt Hentschläger & Ulf Langheinrich)  
  
Highlight (color #FFBB01):  
striking sensorial assault  
  
Highlight (color #FFBB01):  
perception through subtle and violent acts of repetition.  
  
Highlight (color #FFBB01):  
expose the patterns that unfold in time as a single image  
  
  
--- Page 50 ---  
  
Highlight (color #FFBB01):  
machine-human choreo-graphy  
  
Highlight (color #FFBB01):  
Editing the video and   
  
sound in parallel creates audiovisual synchronicity  
  
Highlight (color #FFBB01):  
sound of the original video recording is part of each edited frame.  
  
  
--- Page 51 ---  
  
Highlight (color #FFBB01):  
explore repeated geometric forms and transformations  
  
  
--- Page 52 ---  
  
Highlight (color #FFBB01):  
used seven random values to control   
  
the size, location, orientation, quantity, and pen for each set of lines.  
  
  
--- Page 53 ---  
  
Highlight (color #FFBB01):  
Ruth Leavitt, Artist and Computer (New York: Harmony   
  
Highlight (color #FFBB01):  
THE COMPUTER'S TALENT  
  
Interruptions, by Vera Molnar, 1968–69 The prints in the Interruptions series are among Molnar's first software-generated   
  
images. She started working with computers in 1968 to produce unique ink on paper plotter drawings to realize her visual ideas.   
  
1 Ruth Leavitt, Artist and Computer (New York: Harmony Books, 1976), 35.   
  
2 Ibid., 94.   
  
3 Ibid., 95.  
  
Repeat Repeat 53  
  
REPEAT  
  
THE COMPUTER'S TALENT  
  
Highlight (color #FFBB01):  
Computers are designed to accurately perform the same calculation over and over.   
  
Highlight (color #FFBB01):  
repetition by modulating random values and applying space-division algorithms.   
  
Highlight (color #FFBB01):  
Frieder Nake  
  
Highlight (color #FFBB01):  
Vera Molnar and Manfred Mohr  
  
Highlight (color #FFBB01):  
gurative images composed of basic geometric shapes;   
  
Highlight (color #FFBB01):  
make drawings, perform small changes, and then evaluate the differences.   
  
Highlight (color #FFBB01):  
computer was a “legitimate amplifi er for our intellectual and visual experiences.  
  
Highlight (color #FFBB01):  
situated their work within the context of art history and con-temporary art  
  
Highlight (color #FFBB01):  
conceptual artists working with systems and multiples, such as Sol LeWitt  
  
Highlight (color #FFBB01):  
Molnar wrote about the theme of iteration and slight variation within art, citing Claude Monet's series of haystack paintings as an example.   
  
Highlight (color #FFBB01):  
Interruptions  
  
  
--- Page 54 ---  
  
Highlight (color #FFBB01):  
composed of software   
  
models of poisonous flowers  
  
  
--- Page 55 ---  
  
Highlight (color #FFBB01):  
framebuffer  
  
Highlight (color #FFBB01):  
David Em  
  
Highlight (color #FFBB01):  
collage approach to making images.  
  
Highlight (color #FFBB01):  
creating a population of fully realized, autonomous characters  
  
Highlight (color #FFBB01):  
simulate crowd behaviors  
  
Highlight (color #FFBB01):  
David A. Ross and David Em, The Art of David Em: 100 Computer Paintings  
  
Highlight (color #FFBB01):  
Mobility Agents: A computational sketchbook, by John F. Simon Jr  
  
  
--- Page 56 ---  
  
Highlight (color #FFBB01):  
Aperiodic Vertebrae v2.0, by THEVERYMANY / Marc Fornes and Skylar Tibbits  
  
  
--- Page 57 ---  
  
Highlight (color #FFBB01):  
MODULARITy MODULARITy  
  
Minimum Inventory, Maximum Diversity diagram, by Peter Pearce, 1978 Pearce's book Structure in Nature Is a Strategy   
  
for Design makes a strong case for the technique of using a minimum number of ele-ments to create a range of diverse forms.   
  
Here, four shapes are used as the basis for all of these structures.   
  
Mario Soup, by Ben Fry, 2003 This software shows how all of the graphics used in Nintendo's 1985 Super Mario Bros. game are stored within   
  
two matrices. In this image, one matrix is shown as red and the other as blue. The colors used in the game are applied while the game is running.   
  
Repeat Repeat 57  
  
REPEAT  
  
MODULARITy MODULARITy MODULARITy  
  
Highlight (color #FFBB01):  
Modularity involves the arrangement of one or more elements to produce a multitude of forms.  
  
Highlight (color #FFBB01):  
range of visual forms is created through a few basic shapes  
  
Highlight (color #FFBB01):  
In software, modularity is often used as a strategy for optimization  
  
Highlight (color #FFBB01):  
small set of graphics is repeated to generate larger images.  
  
Highlight (color #FFBB01):  
Video games have a long history of using a small set of graphics to create large worlds.  
  
Highlight (color #FFBB01):  
modularity is used to reduce   
  
Highlight (color #FFBB01):  
cost and to make complex building proj-ects feasible  
  
Highlight (color #FFBB01):  
using software to explore a design space of fi xed parts.   
  
Highlight (color #FFBB01):  
layout algorithm to explore possible confi gurations of the system.  
  
Highlight (color #FFBB01):  
computational machines (i.e. computers) can produce form with endless variation  
  
Highlight (color #FFBB01):  
Pearce's book Structure in Nature Is a Strategy   
  
for Design  
  
Highlight (color #FFBB01):  
technique of using a minimum number of ele-ments to create a range of diverse forms.   
  
  
--- Page 59 ---  
  
Highlight (color #FFBB01):  
Repetition technique Pattern  
  
Highlight (color #FFBB01):  
All visual patterns and tes-sellations at their core are composed of algorithms.  
  
Highlight (color #FFBB01):  
strict compositional rules that are capable of being encoded into software.  
  
Highlight (color #FFBB01):  
Repetitive patterns are used extensively for applications requiring the illusion of a continuous   
  
image  
  
  
--- Page 60 ---  
  
Highlight (color #FFBB01):  
building blocks for infinite pattern   
  
variations  
  
Highlight (color #FFBB01):  
a simple form is repeated and the elements are combined to form second-order   
  
patterns, as the positive and negative shapes  
  
  
--- Page 61 ---  
  
Highlight (color #FFBB01):  
Mihich is a sculptor and painter, but he started sketching with computers in 1998.   
  
Highlight (color #FFBB01):  
fixed algo-rithms that sometimes introduce the element of chance  
  
Highlight (color #FFBB01):  
painting was composed with the following rules:   
  
NINE COLORS WERE DIVIDED INTO THREE VALUE GROUPS: BLUE/GREEN/RED, VIOLET/ORANGE/TURQUOISE, AND LIGHT ORANGE/LIGHT VIOLET/ LIGHT BLUE. RED WAS FIRST. BLUE WAS SECOND. GREEN WAS THIRD. VIOLET, ORANGE, AND TURQOISE WERE ARRANGED VERTICALLY. LIGHT ORANGE, LIGHT VIOLET, AND LIGHT BLUE WERE ARRANGED HORIZONTALLY.  
  
  
--- Page 62 ---  
  
Highlight (color #FFBB01):  
Serpentine Gallery Pavilion, by Toyo Ito &   
  
Highlight (color #FFBB01):  
rhythmic lines of Ito's pavilion resulted from a recursive system of rotated concentric squares  
  
  
--- Page 63 ---  
  
Highlight (color #FFBB01):  
Repetition technique Recursion  
  
Highlight (color #FFBB01):  
recursion is a process of repeating objects in a self-similar way.   
  
Highlight (color #FFBB01):  
each leaf is composed of a series of smaller and smaller leaves.   
  
Highlight (color #FFBB01):  
a function that includes a reference to itself   
  
as a part of the function.   
  
Highlight (color #FFBB01):  
it can cause an infinite loop, unless there is a condition to break out of the cycle.   
  
  
--- Page 64 ---  
  
Highlight (color #FFBB01):  
CODE ExAMPLES EMBEDDED ITERATION  
  
Highlight (color #FFBB01):  
All programming languages can repeat an action, such as drawing the same shape over and over.  
  
Highlight (color #FFBB01):  
When one repetition sequence is embedded within another, the effect multiplies  
  
Highlight (color #FFBB01):  
used to explore many kinds of patterns  
  
  
--- Page 65 ---  
  
Highlight (color #FFBB01):  
CODE ExAMPLES RECURSIVE TREE  
  
Highlight (color #FFBB01):  
Treelike forms are a clear example  
  
Highlight (color #FFBB01):  
each branch spawns many smaller branches, which in turn spawn more branches  
  
Highlight (color #FFBB01):  
adding a small amount of randomness to the line lengths and number of branches can yield more organic forms.   
  
Highlight (color #FFBB01):  
each circle was slightly rotated and scaled relative to the one before it. At random intervals  
  
  
--- Page 67 ---  
  
Highlight (color #FFBB01):  
TRANSFORM  
  
Highlight (color #FFBB01):  
sculpting with clay, mixing paint, or enlarging a photograph; it is the transforma-tion of raw material into a work  
  
Highlight (color #FFBB01):  
how transformation is used and how code can facilitate visual transformations.  
  
Highlight (color #FFBB01):  
letters are distorted by applying the same algorithms  
  
  
--- Page 69 ---  
  
Highlight (color #FFBB01):  
Transformation refers to the act of manipulat-ing a preexisting form to create something new.  
  
Squiggly underline (red):  
indicates a change in the viewer's relationship to the object that has been transformed.   
  
Highlight (color #FFBB01):  
indicates a change in the viewer's relationship to the object that has been transformed.   
  
Highlight (color #FFBB01):  
making reference to existing symbols and schemes within society, transforma-tion can alter our perception in a way that emphasizes our emotional connections.   
  
Highlight (color #FFBB01):  
play on geometric perspective.   
  
Highlight (color #FFBB01):  
Take an object. Do something to it. Do something else to it. “ “ “ “ “  
  
  
--- Page 70 ---  
  
Highlight (color #FFBB01):  
regular grid that deforms progressively   
  
over time  
  
Highlight (color #FFBB01):  
Changes in the grid appear as ripples of evolving shapes in bright color.  
  
  
--- Page 71 ---  
  
Highlight (color #FFBB01):  
GEOMETRIC TRANSFORM  
  
Geometric Transformation Each 2-D transformation preserves some features of the original while destroying or distort-ing others.   
  
Perhaps the most basic transformation simply involves moving an object. We don't typically think of movement as a type of transformation, but moving elements around is the most fundamental way to make changes to a composition. Another familiar transformation is rotation. An object can be rotated in any number of ways to change its relationship to other objects around it. Flat 2-D items can only be rotated around one axis; for instance, turning a photograph on the wall to change which end faces up. Three-dimensional objects, on the other hand, can be rotated around any number of axes. Another fundamental transformation that has become familiar within everyday life is scaling, but it is diffi cult to fi nd instances where objects can easily change their size. In the real world, differences of scale are typically seen through a series of multiples or in perspective, as objects appear to shrink as they move further away. Representing images and objects digitally opens up the possibility for a number of transformations that are not feasible in real life. Objects can be sheared, stretched, refl ected, warped, and distorted. In his series of skull sculptures, Robert Lazzarini used techniques of transformation to create a pro-foundly unsettling installation at the Whitney Museum of American Art. He began with a 3-D scan of a human skull, and applied a series of distortions and projections to the digital model to create an impossible object—one that retained a morbid familiarity (see page 68). Each skull appears to have been transformed using a technique called anamorphosis, a type of visual distortion made popular in the sixteenth century, in which an object is manipulated so that it can only be seen correctly from one vantage point. The most famous example of this technique is Hans Holbein the Younger's 1533 painting The Ambassadors, which features a prominently placed, distorted skull that can only be viewed in full when the painting is viewed from the side. Lazzarini references this disconcerting image; through the use   
  
of digital techniques, he creates a series of skulls that have no true vantage point. He constantly puts the viewer on guard, in search of a perspective that allows the onlooker to make sense of the objects. The advent of computer animation and special-effects software has had a pro-found impact on the work of fi lm and video artists, as well as architects and choreogra-phers. Many animation software packages use geometric transformations to create smooth transitions between shapes. These tweens, as they are called (an abbreviation of in-between), take a predefi ned begin-ning and end state, and they smoothly animate the morphing of one into the other. Architect Greg Lynn has used the interme-diate shapes of the tween, along with other computer-animation techniques, as the basis for an animate architecture “defi ned by the co-presence of motion and force at the moment of conception.”1 Likewise, dance choreographer Merce Cunningham uses software to fi nd new forms and movements that appear when the program is asked to fi nd transitions between two unlikely positions. Both of these creators highlight an important connection between form and code: that code can be a source of inspiration and it can help create previ-ously unimaginable forms.   
  
1 Greg Lynn, Animate Form (New York: Princeton Architectural Press, 1999), 11.  
  
Transform Transform 71  
  
TRANSFORM  
  
GEOMETRIC TRANSFORM  
  
Highlight (color #FFBB01):  
most basic transformation simply involves moving an object.   
  
Highlight (color #FFBB01):  
moving elements around is the most fundamental way to make changes to a composition.   
  
Highlight (color #FFBB01):  
rotation  
  
Highlight (color #FFBB01):  
rotated in any number of ways to change its relationship to other objects around it.   
  
Highlight (color #FFBB01):  
Flat 2-D items can only be rotated around one axis;   
  
Highlight (color #FFBB01):  
Three-dimensional objects, on the other hand, can be rotated around any number of axes.   
  
Highlight (color #FFBB01):  
In the real world, differences of scale are typically seen through a series of multiples or in perspective  
  
Highlight (color #FFBB01):  
Objects can be sheared, stretched, refl ected, warped, and distorted  
  
Highlight (color #FFBB01):  
anamorphosis  
  
Highlight (color #FFBB01):  
in which an object is manipulated so that it can only be seen correctly from one vantage point.  
  
Highlight (color #FFBB01):  
he creates a series of skulls that have no true vantage point.   
  
Highlight (color #FFBB01):  
use geometric transformations to create smooth transitions between shapes.  
  
Highlight (color #FFBB01):  
tweens  
  
Highlight (color #FFBB01):  
take a predefi ned begin-ning and end state, and they smoothly animate the morphing of one into the other.   
  
Highlight (color #FFBB01):  
the interme-diate shapes of the tween  
  
Highlight (color #FFBB01):  
fi nd transitions between two unlikely positions.  
  
Highlight (color #FFBB01):  
code can be a source of inspiration and it can help create previ-ously unimaginable forms.  
  
  
--- Page 72 ---  
  
Highlight (color #FFBB01):  
The Invisible Shape of Things Past, by ART+COM  
  
Highlight (color #FFBB01):  
camera moves with a pan, tilt, or turn, the frames twist and turn, produc-  
  
ing unexpected and fascinating shapes.  
  
  
--- Page 74 ---  
  
Highlight (color #FFBB01):  
photographs were transformed into images composed of   
  
engineering symbols.   
  
Highlight (color #FFBB01):  
Each point was repre-sented as a grayscale value, then replaced by a graphic symbol.  
  
  
--- Page 75 ---  
  
Highlight (color #FFBB01):  
NUMERICAL TRANSFORM  
  
On Growth and Form, by D'Arcy Wentworth Thompson, 1917 In this book, Thompson demonstrated how a series of geometric   
  
and topological transformations could explain, even predict, morphological changes in animal species.  
  
When an image or object is represented in digital form, it must fi rst be described in numerical terms. This description allows for countless new types of transformations. While geometric transformations (discussed above) require that objects be described using coordinates, image-based transforma-tions are described using the numerical terms of pixel values. We can apply math-ematical formulas to the values of each pixel, such as color, brightness, and transpar-ency. This process weakens the connection between the object being acted upon and the transformed version of it. For instance, scal-ing will only make an image smaller or larger, but applying a mathematical function to the pixel values may create something that looks little to nothing like the original. For example, in 1966, computer engineers Kenneth C. Knowlton and Leon Harmon exploited this feature of digital images to create Mural, an image of a woman composed entirely of engineering symbols. Each section of the image was analyzed for its relative darkness and then replaced with a symbol having an equivalent tone. A similar technique is often seen in so-called ASCII transformations in which pixels are replaced with alphanumeric characters to form an image. Among the most useful mathematical transformations are image fi lters. By looking just at the numerical values of pixels, fi lters can perform a surprising number of useful operations, such as blurring, sharpening, edge fi nding, and color conversion, to name just a few. Two common families of fi lters are called high-pass and low-pass fi lters. Low-pass fi lters dampen abrupt changes in value so as to produce a smoother, blurred image, and they are often used to reduce noise in digital images. High-pass fi lters do just the opposite; they preserve values with sharp transitions and are useful for sharpening features in images and enhancing the edges of elements. In On Growth and Form, fi rst published in 1917, mathematical biologist D'Arcy Wentworth Thompson described a way to   
  
apply mathematical formulas to study the development of form in living creatures. This science, which he termed morphology, used a numerical description of form (simi-lar to the one discussed in this chapter) as a foundation. In Thompson's words:   
  
The mathematical defi nition of a ‘form' has a quality of precision which was quite lacking in our earlier stage of mere description....We discover homologies or identities which were not obvious before, and which our descriptions obscured rather than revealed.2  
  
By describing form in mathematical terms, Thompson was able, through the use of transformations, to fi nd continuity in the evolution of species. His work, however, took a slightly different approach. Rather than consider the transformation as acting upon the form, he characterized it in terms of the coordinate system in which the form was described. For example, consider an image printed on a piece of rubber; by poking and stretching the rubber sheet, endless variations of the original image can be produced, but the connections between each of them remain obvious. Thompson would manipulate and transform images by plotting them on new coordinate systems. These included scaled and sheared grids, systems based on logarithms, and polar planes. Thompson was able to describe (in mathematical detail) changes in the shapes of bones from one species to the next, and even make predictions about intermediate species in evolutionary history.   
  
2 D'Arcy Wentworth Thompson, On Growth and Form: The Complete Revised Edition (Mineola, NY: Dover Publications, 1992), 1027.  
  
Transform Transform 75  
  
TRANSFORM  
  
NUMERICAL TRANSFORM  
  
Highlight (color #FFBB01):  
D'Arcy Wentworth Thompson, On Growth and Form:   
  
Highlight (color #FFBB01):  
When an image or object is represented in digital form, it must fi rst be described in numerical terms.  
  
Highlight (color #FFBB01):  
geometric transformations (discussed above) require that objects be described using coordinates  
  
Highlight (color #FFBB01):  
image-based transforma-tions are described using the numerical terms of pixel values.  
  
Highlight (color #FFBB01):  
We can apply math-ematical formulas to the values of each pixel, such as color, brightness, and transpar-ency.  
  
Highlight (color #FFBB01):  
Each section of the image was analyzed for its relative darkness and then replaced with a symbol having an equivalent tone.  
  
Highlight (color #FFBB01):  
similar technique is often seen in so-called ASCII transformations  
  
Highlight (color #FFBB01):  
pixels are replaced with alphanumeric characters to form an image.  
  
Highlight (color #FFBB01):  
useful mathematical transformations are image fi lters.  
  
Highlight (color #FFBB01):  
blurring, sharpening, edge fi nding, and color conversion  
  
Highlight (color #FFBB01):  
high-pass and low-pass fi lters  
  
Highlight (color #FFBB01):  
Low-pass fi lters dampen abrupt changes in value so as to produce a smoother, blurred image, and they are often used to reduce noise in digital images  
  
Highlight (color #FFBB01):  
High-pass fi lters do just the opposite; they preserve values with sharp transitions and are useful for sharpening features in images and enhancing the edges of elements.  
  
Highlight (color #FFBB01):  
by poking and stretching the rubber sheet, endless variations of the original image can be produced  
  
Highlight (color #FFBB01):  
transform images by plotting them on new coordinate systems. These included scaled and sheared grids, systems based on logarithms, and polar planes.  
  
  
--- Page 76 ---  
  
Highlight (color #FFBB01):  
Wave Modulation, by Jim Campbell  
  
Highlight (color #FFBB01):  
this work reduces a video image   
  
so that it can be displayed on a coarse matrix of LEDs. A treated Plexiglas panel placed in front of the LEDs diffuses   
  
the individual points of light into a ghostly image of ocean waves. Over a period of ten minutes, the waves change from   
  
undulating in real time, to slowing down, to a still image, and back to their original speed  
  
  
--- Page 77 ---  
  
Highlight (color #FFBB01):  
it uses a transformation of polar coordinates to create a unique form.  
  
  
--- Page 78 ---  
  
Highlight (color #FFBB01):  
Amodal Suspension, by Rafael Lozano-Hemmer  
  
Highlight (color #FFBB01):  
used incoming text mes-sages to control the   
  
light display above the Yamaguchi Center for Arts and Media  
  
Highlight (color #FFBB01):  
frequencies of letters were translated into   
  
flashes of light in the night sky above the museum.  
  
  
--- Page 79 ---  
  
Highlight (color #FFBB01):  
TRANSCODING  
  
Data Diaries, by Cory Arcangel, 2003 Arcangel tricked his computer into reading its memory as if it were a QuickTime movie.   
  
No complicated substi-tutions or interpreta-tions were necessary, and no predetermined conversions were set up, such that a certain   
  
value from the memory file would cause a spe-cific result. This was a direct translation, similar to reciting   
  
driving directions aloud like poetry.  
  
One direct consequence of describing information numerically is transcoding or the conversion of one type of digital information into another, for instance, converting a fi le from a JPEG to a PNG format. Transcoding can also be used to create completely new forms by interfering with how the computer handles a set of data. For example, it can allow the bits of an audio fi le to be read by a program that normally operates on the bits represent-ing an image. Transcoding uses the fi le data as raw material for computation. A good example is a simple substitution cipher, where each letter is replaced with a number corresponding to its position in the alphabet. This cipher turns the name Ben into the numbers 2, 5, and 14. Once the conversion is made, the numbers can be used in a variety of ways to create new values. These values can, in turn, be used to create new images or artworks. For example, the number can be added together to get 21, which, in turn, can be used to set the red value of a pixel in an image. (But since the word “at” also has a value of 21, this will only create a very loose connection between the original word and the color of the pixel.) Because the letters have been converted to numbers, they can be transformed in atypical ways. Rafael Lozano-Hemmer's 2003 instal-lation Amodal Suspension transforms text messages into light beams, from spotlights projected into the sky above the Yamaguchi Center for Arts and Media (YCAM) in Japan. The transformation scheme used by Lozano-Hemmer produced a particularly striking display. The letters contained in each text message were analyzed based on the frequency with which they appeared. The frequency values were used to control the intensity of the spotlight: the letter A would push the light to full brightness, while Z would appear as a dim glow. In this way, our everyday language is transformed into something akin to the fl ashes of fi refl ies.  
  
The continuity provided by the numerical representation of information is exploited to its fullest in the programming environment Max. Inspired by the patch cables of analog synthesizers, a Max program is composed of input and output patches that control the fl ow of data. When used with Jitter (a pro-gram extension that adds video features), Max can connect the frames of a video to a sound generator, run them through a fi lter, and reconnect the results back to a video generator. In the same way that the fl ow of electricity can be used to power any electronic device, the fl ow of binary data can be applied to any number of Max's software patches. Transformation provides a way to express continuity between forms, data, and ideas. When a work utilizes techniques of transformation, it retains a connection between its original and transformed versions, and such radical transformations can reveal entirely new relationships.   
  
Transform Transform 79 TRANSCODING  
  
Highlight (color #FFBB01):  
direct consequence of describing information numerically is transcoding or the conversion of one type of digital information into another  
  
Highlight (color #FFBB01):  
create completely new forms by interfering with how the computer handles a set of data  
  
Highlight (color #FFBB01):  
the bits of an audio fi le to be read by a program that normally operates on the bits represent-ing an image  
  
Highlight (color #FFBB01):  
Transcoding uses the fi le data as raw material for computation.   
  
Highlight (color #FFBB01):  
Data Diaries  
  
Highlight (color #FFBB01):  
Cory Arcangel, 2003 Arcangel tricked his computer into reading its memory as if it were a QuickTime movie.  
  
Highlight (color #FFBB01):  
letters have been converted to numbers  
  
Highlight (color #FFBB01):  
transforms text messages into light beams  
  
Highlight (color #FFBB01):  
The letters contained in each text message were analyzed based on the frequency with which they appeared  
  
Highlight (color #FFBB01):  
frequency values were used to control the intensity of the spotlight  
  
Highlight (color #FFBB01):  
the letter A would push the light to full brightness, while Z would appear as a dim glow. In this way, our everyday language is transformed into something akin to the fl ashes of fi refl ies  
  
Highlight (color #FFBB01):  
connect the frames of a video to a sound generator, run them through a fi lter, and reconnect the results back to a video generator  
  
Highlight (color #FFBB01):  
same way that the fl ow of electricity can be used to power any electronic device, the fl ow of binary data can be applied to any number of Max's software patches  
  
Highlight (color #FFBB01):  
Transformation provides a way to express continuity between forms, data, and ideas  
  
Highlight (color #FFBB01):  
When a work utilizes techniques of transformation, it retains a connection between its original and transformed versions  
  
  
--- Page 80 ---  
  
Highlight (color #FFBB01):  
converts the source code of computer worms,   
  
viruses, trojans and spyware into visual images  
  
Highlight (color #FFBB01):  
Dragulescu's software analyzes subroutines and memory addresses stored in   
  
the spyware to create 3-D forms exhibiting patterns found in the code  
  
  
--- Page 82 ---  
  
Highlight (color #FFBB01):  
netropolis, by Michael Najjar, 2004  
  
Highlight (color #FFBB01):  
combines multiple per-spectives of the same city into images of   
  
an imagined networked future  
  
  
--- Page 83 ---  
  
Highlight (color #FFBB01):  
show the similarities between these otherwise unique moments  
  
Highlight (color #FFBB01):  
compelling transfor-mations of images often involve repetition  
  
Highlight (color #FFBB01):  
Image averaging  
  
Highlight (color #FFBB01):  
calculating the median color or brightness value for pixels contained in an image  
  
Highlight (color #FFBB01):  
By repeatedly combining related images, one can expose behavioral norms, reveal expectations, and find new connections  
  
Highlight (color #FFBB01):  
TRANSFORMATION technique IMAGE AVERAGING  
  
  
--- Page 85 ---  
  
Highlight (color #FFBB01):  
explore the vivid and manic imagery of broadcast television  
  
Highlight (color #FFBB01):  
Slit-scanning is a technique that transforms the frames of a video into an image to convey the passage of time or movement through space  
  
Highlight (color #FFBB01):  
For each frame of a video, capture a single column of pixels (or a slit) to make a   
  
very narrow camera. Then recombine the columns to create a single image  
  
Highlight (color #FFBB01):  
TRANSFORMATION technique SLIT-SCANNING  
  
  
--- Page 87 ---  
  
Highlight (color #FFBB01):  
The net.art generator (net.art-generator.com)   
  
asks viewers to enter a search term for their soon-to-be-realized creation. It uses a series of algorithms to collect and combine   
  
images to create a com-pletely unique web page from many online sources.  
  
Highlight (color #FFBB01):  
com-bines a number of different techniques for collecting, modifying, and compositing images and text  
  
Highlight (color #FFBB01):  
classic collage techniques, such as cut-ups, décollage   
  
Highlight (color #FFBB01):  
assemblages  
  
Highlight (color #FFBB01):  
TRANSFORMATION technique COLLAGE ENGINEERING  
  
  
--- Page 89 ---  
  
Highlight (color #FFBB01):  
random values to define the color, position,   
  
and rotation of his small drawings to make a larger collage  
  
  
--- Page 90 ---  
  
Highlight (color #FFBB01):  
Photographic images can be a rich source of data, and transcoding can be used to interpret this data from a different perspective  
  
Highlight (color #FFBB01):  
Image extrusion is a visually appeal-ing transcoding technique that creates depth from a 2-D picture.  
  
Highlight (color #FFBB01):  
loads a black-and-white image of an iceberg taken from a satellite, and it uses the gray value of each pixel to displace the position of a line along the z-axis  
  
Highlight (color #FFBB01):  
black pixel value will have less displacement than a white one  
  
Highlight (color #FFBB01):  
TRANSCODED LANDSCAPE  
  
  
--- Page 93 ---  
  
Highlight (color #FFBB01):  
creating a matrix encompassing an entire population of possible designs.  
  
Highlight (color #FFBB01):  
move from thinking about an object to thinking about a fi eld of infi nite options  
  
Highlight (color #FFBB01):  
searching for and exploring a population of designs that meet certain requirements, behave in particular ways, or fi t the desires of the designer.  
  
Highlight (color #FFBB01):  
PARAMETERIzE  
  
  
--- Page 94 ---  
  
Highlight (color #FFBB01):  
Geno Pheno Sculpture “Fractal Dice No. 1”, by Keith Tyson, 2005 A statement released   
  
Highlight (color #FFBB01):  
An algo-rithm written by the artist determines what will be on view in this new exhibition.  
  
  
--- Page 95 ---  
  
Highlight (color #FFBB01):  
parameter is a value that has an effect on the output of a process  
  
Highlight (color #FFBB01):  
amount of sugar in a recipe, or as complex as the activation threshold of a neuron in the brain  
  
Highlight (color #FFBB01):  
parameters describe, encode, and quantify the options and constraints at play in a system  
  
Highlight (color #FFBB01):  
Identifying and describing the variable elements in a process—be it a section of code or the rules of a Dadaist poem—is called parameterization  
  
Highlight (color #FFBB01):  
decide both what can change and the range of possible values for each parameter  
  
Highlight (color #FFBB01):  
greater number of parameters are identifi ed and incorporated into a process, the number of possible outcomes also increases.   
  
Highlight (color #FFBB01):  
parameter as defi n-ing an axis on a graph  
  
Highlight (color #FFBB01):  
parameterized system as defi ning a space populated by potential design states  
  
Highlight (color #FFBB01):  
repetition offers a way to explore a fi eld of possible designs for favorable variations  
  
Highlight (color #FFBB01):  
visualization and simulation require the use of parameters to defi ne the system  
  
Highlight (color #FFBB01):  
they describe how data or other inputs will infl uence the behaviors of that system.  
  
  
--- Page 96 ---  
  
Highlight (color #FFBB01):  
S I F L A T W A R E   
  
Serving Spo on actual size  
  
A L E S S I   
  
G r e g L y n n F O R M A p r i l 2 0 0 4  
  
A L E S S I F L A T W A R E G r e g L y n n F O R M A p r i l 2 0 0 4  
  
BIG SPOON actual size  
  
Flatware, by Greg Lynn, 2005–present This fifty-two-piece flatware set was designed by mutating,   
  
blending, and evolving a base form  
  
  
--- Page 98 ---  
  
Highlight (color #FFBB01):  
Phare Tower, by Morphosis, 2008  
  
  
--- Page 101 ---  
  
Highlight (color #FFBB01):  
system for compos-ing images  
  
Highlight (color #FFBB01):  
sculptures, shapes relate to one another through fi xed connec-tions  
  
Highlight (color #FFBB01):  
but they are so well balanced that the wind can move the elements to shift their positions  
  
Highlight (color #FFBB01):  
the work of art is a fi eld of open possibilities.  
  
Highlight (color #FFBB01):  
Tristan Tzara and William S. Burroughs introduced innovative, unpredictable operations as methods of writing  
  
Highlight (color #FFBB01):  
John Cage used randomness as a fundamental technique for musical compositions  
  
Highlight (color #FFBB01):  
COMPOSITION SySTEMS  
  
Subtraction.com, by Khoi Vinh, 2000–09 There are many different layouts on this website, but Vinh uses an eight-column grid to give the   
  
same structure to each variation. Variation Example, by Emil Ruder, 1967 Emil Ruder's book Typographie shows how a highly constrained set of elements can be   
  
used to generate a wide range of compositions. Using only one line and one dot, he diagrams thirty-six unique compositions. He makes   
  
a point to write that his variations are “only a fraction of the almost unlimited possibilities.”  
  
others resulted from events outside of their control. They invented systems from which an infi nite number of unique works could (and did) emerge. This way of working is summarized well by Sol LeWitt's statement: “The idea becomes a machine that makes the art.”2  
  
More carefully determined systems include grids for composing pages in books, magazines, websites, and for post-ers. They allow each page to be unique, while still relating to every other page. For example, the Unigrid System, designed for the U.S. National Parks Service (NPS) in 1968 allows each park (Yellowstone, Yosemite, etc.) to have a unique brochure suited to its needs while also allowing the NPS to maintain a strong organizational identity. The Unigrid System is a fl exible, open framework that allows individual designers to make their own decisions about layout while working within a larger system. Subtraction.com, which is the website and blog of Khoi Vinh (the art director of NYTimes.com) is a more contemporary example. A grid system applied to a website allows for hundreds, even thousands of pages to be generated based on a single structure. Vinh cites Josef Müller-Brockmann and Massimo Vignelli as infl uences, and he makes direct links between the history of the grid within print design and how it transfers to the web. Speaking about grids in an interview, he said:   
  
A grid system is not just a set of rules to follow...but it's also a set of rules to play off of—to break, even. Given the right grid—the right system of constraints—very good designers can create solutions that are both orderly and unexpected.3   
  
1 Umberto Eco, The Open Work (Cambridge, MA: Harvard University Press, 1989), 86.   
  
2 Alexander Alberro and Blake Stimson, eds., Conceptual Art: A Critical Anthology (Cambridge, MA: MIT Press, 2000), 14.   
  
3 Interview with Khoi Vinh: http://www.thegridsystem. org/2009/articles/interview-with-khoi-vinh/.  
  
101  
  
PARAMETERIzE  
  
COMPOSITION SySTEMS  
  
Highlight (color #FFBB01):  
others resulted from events outside of their control  
  
Highlight (color #FFBB01):  
defi ned a set rules where some elements were selected by themselves  
  
Highlight (color #FFBB01):  
A grid system is not just a set of rules to follow...but it's also a set of rules to play off of—to break, even.   
  
  
--- Page 102 ---  
  
Highlight (color #FFBB01):  
balances direct control with an auto-mated context-aware system to produce a stream of sonic and   
  
visual events that move beyond the expectations of its creators.  
  
  
--- Page 103 ---  
  
Highlight (color #FFBB01):  
VARIABLES  
  
Two Space, by Larry Cuba, 1979 Cuba combined a set of nine tiles with twelve symmetrical pattern arrangements   
  
to create a mesmerizing animation. The white-on-black scheme creates optical illusions, figure-ground rever-sals, and after-image   
  
effects. The parametric organization of the software allows for any of the tiles to be com-bined with any of the patterning schemes.   
  
4 Ken Perlin greatly impacted the computer graphics world with his invention of Perlin Noise in 1985. This method for generating textures is widely used in computer graphics to create visual effects like smoke, fi re, clouds, and organic motion.   
  
103  
  
PARAMETERIzE  
  
VARIABLES  
  
Highlight (color #FFBB01):  
In any system or set of rules, there exists the potential for variation  
  
Highlight (color #FFBB01):  
unpredictable interaction of natural forces  
  
Highlight (color #FFBB01):  
chang-ing other parameters in the system.  
  
Highlight (color #FFBB01):  
When the value of a parameter can change, we call this a variable.  
  
Highlight (color #FFBB01):  
Variables can be distinguished from constants, whose values cannot change  
  
Highlight (color #FFBB01):  
variables can be considered as the primary axes of variation.   
  
Highlight (color #FFBB01):  
Defi ning the range of values is one way that designers can assert their aesthetic sensibilities in a parameterized system.  
  
Highlight (color #FFBB01):  
range can be refi ned to produce a narrower, but more pleasing fi eld of variations.  
  
Highlight (color #FFBB01):  
randomness is a useful tool for fi nding interesting variations in a parameterized system  
  
Highlight (color #FFBB01):  
Sequences of random numbers can be generated in such a way that each number in the sequence differs only slightly from the last; this technique aids in the simulation of natural effects like wind, waves, and rock formations  
  
Highlight (color #FFBB01):  
optical illusions, figure-ground rever-sals  
  
Highlight (color #FFBB01):  
after-image   
  
effects.   
  
  
--- Page 105 ---  
  
Highlight (color #FFBB01):  
fractured landscape, by Jean-Pierre Hébert  
  
  
--- Page 107 ---  
  
Highlight (color #FFBB01):  
CONTROL 107 CONTROL  
  
Highlight (color #FFBB01):  
Parameters are often used to create a system that generates optimal variation within a given set of constraints  
  
Highlight (color #FFBB01):  
complex and unpredictable forms can be achieved by linking the parameters of multiple elements together.  
  
  
--- Page 108 ---  
  
Highlight (color #FFBB01):  
it produces idiosyncratic   
  
blobs of polyethylene, rather than mass-market consumables  
  
  
--- Page 109 ---  
  
Highlight (color #FFBB01):  
PARAMETER technique ONE-OF-ONE  
  
Highlight (color #FFBB01):  
Mohr explains that his software “selects a subset of cubes from a   
  
repertoire of 42,240 cubes inherent to the 11-d hyper-cube  
  
Highlight (color #FFBB01):  
P1011-F1, P1011-H1, P1011-I1, by Manfred Mohr  
  
  
--- Page 112 ---  
  
Highlight (color #FFBB01):  
Scriptographer, by Jürg Lehni  
  
Highlight (color #FFBB01):  
Superpolator, by LettError  
  
  
--- Page 113 ---  
  
Highlight (color #FFBB01):  
PARAMETER technique VARIABLE FONTS  
  
  
--- Page 114 ---  
  
Highlight (color #FFBB01):  
It offers the abiity to reconfigure and distort the motion and connections between the limbs  
  
Highlight (color #FFBB01):  
PuppetTool, by LeCielEstBleu  
  
Highlight (color #FFBB01):  
creatures in Oasis have over thirty   
  
parameters that can be tuned to change their behaviors  
  
Highlight (color #FFBB01):  
console allows users to modify the   
  
procedural animation while it runs.  
  
  
--- Page 115 ---  
  
Highlight (color #FFBB01):  
PARAMETER technique CONSOLE  
  
Highlight (color #FFBB01):  
The values controlled through a software console are linked to variables within the program  
  
Highlight (color #FFBB01):  
allow the state of the   
  
program to change without rewriting the code.  
  
  
--- Page 116 ---  
  
Highlight (color #FFBB01):  
first step in creating a parameterized design is to decompose the form into variables.  
  
Highlight (color #FFBB01):  
simple, parameter-ized chair has variables for the dimensions of the seat, the height of the back, and the thickness of the frame  
  
  
--- Page 117 ---  
  
Highlight (color #FFBB01):  
Parameters are powerful tools for controlling a series of objects.   
  
Highlight (color #FFBB01):  
behavior or form of each object can be con-nected to the value of one or more variables.  
  
Highlight (color #FFBB01):  
how a population of those objects could combine to create a larger form.  
  
  
--- Page 119 ---  
  
Highlight (color #FFBB01):  
  
  
119  
  
VISUALIZE  
  
Highlight (color #FFBB01):  
The visualization removes unnecessary geographic information and adds information related to train schedules and trans-fers  
  
Highlight (color #FFBB01):  
Maps are an early form of visualization  
  
Highlight (color #FFBB01):  
Visualization also helps communicate abstract information and complex processes  
  
Highlight (color #FFBB01):  
These letters were created using a particle system. The particles are attracted to a unique position within a set of interrelated points and, over time, they move toward a single point.  
  
Highlight (color #FFBB01):  
data visualization to bring clarity to an otherwise chaotic system.  
  
  
--- Page 121 ---  
  
Highlight (color #FFBB01):  
Data into Form  
  
Highlight (color #FFBB01):  
ability to under-stand data when it's presented as an image  
  
Highlight (color #FFBB01):  
make our ideas ‘clear,' to bring them into ‘focus,' to ‘arrange' our thoughts  
  
Highlight (color #FFBB01):  
visual language is composed to con-struct meaning  
  
Highlight (color #FFBB01):  
Data presentation tech-niques that combine our innate knowledge with learned skills make data easier to under-stand  
  
Highlight (color #FFBB01):  
Semiology of Graphics: Diagrams, Networks, Maps, Bertin  
  
Highlight (color #FFBB01):  
series of variables that can be used to visually distinguish data elements: size, value, texture, color, orientation, and shape  
  
  
--- Page 122 ---  
  
Highlight (color #FFBB01):  
This graphic shows data for 10,000 cars cross-ing a bridge between the cities of Arnhem   
  
and Nijmegen in the Netherlands between 07:36 and 09:13 am.  
  
  
--- Page 125 ---  
  
Highlight (color #FFBB01):  
one technique is selected instead of another based on the organization of the data  
  
Highlight (color #FFBB01):  
and what the visualization is meant to convey  
  
Highlight (color #FFBB01):  
treemap is a visualization that utilizes nested rectangles to show the relations between one or more data elements.  
  
  
--- Page 127 ---  
  
Highlight (color #FFBB01):  
Dynamic Filters  
  
Highlight (color #FFBB01):  
developing punch cards to store data and a machine to read them  
  
Highlight (color #FFBB01):  
tool for filtering can provide different levels of control,  
  
  
--- Page 131 ---  
  
Highlight (color #FFBB01):  
nAVIgAtIon  
  
  
--- Page 132 ---  
  
Highlight (color #FFBB01):  
ReConstitution, by Sosolimited  
  
  
--- Page 133 ---  
  
Highlight (color #FFBB01):  
Virtual Shakespeare, by David Small  
  
Highlight (color #FFBB01):  
experi-mental interactive 3-D information space that   
  
spatially and volu-metrically represents a portfolio of seven mutual funds  
  
  
--- Page 134 ---  
  
Highlight (color #FFBB01):  
track the move-ment of taxis around the San Francisco Bay Area, Global Positioning System (GPS) devices were   
  
attached to the vehi-cles  
  
  
--- Page 135 ---  
  
Highlight (color #FFBB01):  
using time as the ordering principle  
  
Highlight (color #FFBB01):  
A time-series image can be   
  
a single, static image or it can be an animated image  
  
Highlight (color #FFBB01):  
VISUALIZATION technique TIME SERIES  
  
Highlight (color #FFBB01):  
displays the rhythms and emphases of human   
  
speech.  
  
Highlight (color #FFBB01):  
Language flows into a single expressive line.  
  
  
--- Page 138 ---  
  
Highlight (color #FFBB01):  
relational database and mapping tool that allows users to contribute data and draw relationships.  
  
  
--- Page 139 ---  
  
Highlight (color #FFBB01):  
VISUALIZATION technique NETWORKS  
  
Highlight (color #FFBB01):  
visualizations help us to bet-ter understand the sometimes invisible relationships that affect our world  
  
Highlight (color #FFBB01):  
Network diagrams frequently include two types of elements: nodes and connections.  
  
Highlight (color #FFBB01):  
node is an individual element (a person,   
  
country, or computer) and connections show relation-ships between the nodes.  
  
  
--- Page 141 ---  
  
Highlight (color #FFBB01):  
VISUALIZATION technique DYNAMIC MAPS  
  
Highlight (color #FFBB01):  
Most maps show many layers of information within a single surface.   
  
Highlight (color #FFBB01):  
provide a good foundation for additional layers of informa-tion  
  
Highlight (color #FFBB01):  
Adding changes in time and geometric distortion are effective ways to push the conventions further.  
  
Highlight (color #FFBB01):  
A 3-D map of Mount Fuji was distorted by the GPS data gathered from Fujihata's ascent   
  
(middle) and descent (bottom) from the moun-tain  
  
Highlight (color #FFBB01):  
reimagines the draftsman Henry Beck's classic Underground Map as a malleable space. It warps to show the   
  
time between stations, rather than simply their order  
  
  
--- Page 142 ---  
  
Highlight (color #FFBB01):  
Superformula  
  
  
--- Page 143 ---  
  
Highlight (color #FFBB01):  
VISUALIZATION technique Mathematics Visualization  
  
Highlight (color #FFBB01):  
Images were created to think about mathematics  
  
Highlight (color #FFBB01):  
diagrams to show relation-ships between geometric elements and physical models.  
  
Highlight (color #FFBB01):  
mining the structures of numbers and equations to produce visual images for pleasure and insight.   
  
Highlight (color #FFBB01):  
Using the properties of prime numbers to deter-mine the base struc-ture  
  
Highlight (color #FFBB01):  
images are cre-ated from mathematical equations that have   
  
their origins in image-processing algorithms  
  
  
--- Page 144 ---  
  
Highlight (color #FFBB01):  
i of to my a in was that me but had with he you which it his as not by for on this from her have be when at were is she your him an so they one all could will if been their would or are we who no more these now should yet some before myself what man them am upon our into its only did do life father than every then first might own shall eyes said may time being towards how even saw can night those most elizabeth such found mind any again there heart day felt whom death after where feelings very other thought dear soon friend up made never many still while passed during also thus miserable has must place like same heard became few sometimes us love clerval over little human appeared indeed often country misery words friends justine about nature although until several among cottage feel ever whose see old away hope well great return happiness know despair felix long through world cannot voice another days happy sun poor horror much years men alone scene ice light joy creature came fear affection house far power part nothing out  
  
the and i to of a he in that it was as we for is his me not you with my all be so at but on her have had him she when there which if this from are said were then by could one no do them what us or they will up must some would out shall may our now know see been time can more has am come over van came your helsing went an like into only who go did any before very here back down well again even seemed about room lucy way such good man took mina much how though think saw their dear night than where too through hand after face door should tell made poor dr sleep jonathan old away own eyes looked friend great once things other get just look little make day got might yet professor found count thought off god take let work long say life something men asked told oh last heart place without fear arthur till first its myself two house ever done knew never himself still window began nothing quite harker find coming same these blood want diary white mind head put many mr hands round  
  
and i a in was with he not by for on when at were is she could will if been their would  
  
This example loads, parses, and visualizes text fi les from Project Gutenberg  
  
Highlight (color #FFBB01):  
with he you which it his as not by for on this from her have be when at were is she your him an so they one all could will if been their would or are we who no more these now should yet some before myself what man them am upon our into its only did do life father than every then first might own shall eyes said may time being towards how even saw can night those most elizabeth such found mind any again there heart day felt whom death after where feelings very other thought dear soon friend up made never many still while passed during also thus miserable has must place like same heard became few sometimes us love clerval over little human appeared indeed often country misery words friends justine about nature although until several among cottage feel ever whose see old away hope well great return happiness know despair felix long through world cannot voice another days happy sun poor horror much years men alone scene ice light joy creature came fear affection house far power part nothing out  
  
the and i to of a he in that it was as we for is his me not you with my all be so at but on her have had him she when there which if this from are said were then by could one no do them what us or they will up must some would out shall may our now know see been time can more has am come over van came your helsing went an like into only who go did any before very here back down well again even seemed about room lucy way such good man took mina much how though think saw their dear night than where too through hand after face door should tell made poor dr sleep jonathan old away own eyes looked friend great once things other get just look little make day got might yet professor found count thought off god take let work long say life something men asked told oh last heart place without fear arthur till first its myself two house ever done knew never himself still window began nothing quite harker find coming same these blood want diary white mind head put many mr hands round  
  
and i a in was with he not by for on when at were is she could will if been their would  
  
This example loads, parses, and visualizes text fi les from Project Gutenberg, a massive online collection of electronic books. The images on this page show the program's anal-ysis of two books side by side: Mary Shelley's Frankenstein and Bram Stoker's Dracula. The size of each word cor-relates to the number of times it is used in the book.  
  
Highlight (color #FFBB01):  
program loads a book one line at a time and splits each line into individual words.  
  
Highlight (color #FFBB01):  
For each word, it checks if it is new or if it has already been used in the text  
  
Highlight (color #FFBB01):  
If the word is new, the program adds it to a growing list.  
  
Highlight (color #FFBB01):  
already in the list, the program adds to the tally of how many times it has been used  
  
Highlight (color #FFBB01):  
she your him an so they one all could will if been their would or are we who no more these now should yet some before myself what man them am upon our into its only did do life father than every then first might own shall eyes said may time being towards how even saw can night those most elizabeth such found mind any again there heart day felt whom death after where feelings very other thought dear soon friend up made never many still while passed during also thus miserable has must place like same heard became few sometimes us love clerval over little human appeared indeed often country misery words friends justine about nature although until several among cottage feel ever whose see old away hope well great return happiness know despair felix long through world cannot voice another days happy sun poor horror much years men alone scene ice light joy creature came fear affection house far power part nothing out  
  
the and i to of a he in that it was as we for is his me not you with my all be so at but on her have had him she when there which if this from are said were then by could one no do them what us or they will up must some would out shall may our now know see been time can more has am come over van came your helsing went an like into only who go did any before very here back down well again even seemed about room lucy way such good man took mina much how though think saw their dear night than where too through hand after face door should tell made poor dr sleep jonathan old away own eyes looked friend great once things other get just look little make day got might yet professor found count thought off god take let work long say life something men asked told oh last heart place without fear arthur till first its myself two house ever done knew never himself still window began nothing quite harker find coming same these blood want diary white mind head put many mr hands round  
  
and i a in was with he not by for on when at were is she could will if been their would  
  
This example loads, parses, and visualizes text fi les from Project Gutenberg, a massive online collection of electronic books. The images on this page show the program's anal-ysis of two books side by side: Mary Shelley's Frankenstein and Bram Stoker's Dracula. The size of each word cor-relates to the number of times it is used in the book. In some language analysis programs, the words most frequently used in English, the articles and pronouns, are not included in   
  
the visualization because they are too common. The program loads a book one line at a time and splits each line into individual words. For each word, it checks if it is new or if it has already been used in the text. If the word is new, the program adds it to a growing list. If it is already in the list, the program adds to the tally of how many times it has been used. After the entire book is read, the program sorts the list by the number of times each word was used.  
  
  
--- Page 145 ---  
  
Highlight (color #FFBB01):  
SUPErFormULA  
  
Highlight (color #FFBB01):  
The form generated by the equation can be controlled by setting the values of a few key param-eters.  
  
  
--- Page 147 ---  
  
Highlight (color #FFBB01):  
software's ability to simulate the real world   
  
Highlight (color #FFBB01):  
Is modeling the natural world with precision the ultimate goal of software simulation?  
  
Highlight (color #FFBB01):  
In some situations, the answer is a definite yes; for example, scientific weather and traffic simulations  
  
Highlight (color #FFBB01):  
design, architecture, and art, high fidelity is less important than the final experience  
  
Highlight (color #FFBB01):  
Bending the rules can create something unexpected and sublime  
  
Highlight (color #FFBB01):  
SIMULATE  
  
  
--- Page 148 ---  
  
Highlight (color #FFBB01):  
virtual spider web  
  
  
--- Page 149 ---  
  
Highlight (color #FFBB01):  
simulation has three parts: variables, a system, and a state  
  
Highlight (color #FFBB01):  
variable is a value that represents a component of the simula-tion. A system is a description of how the variables interact. The state of the system is the values of the variables at any given time  
  
Highlight (color #FFBB01):  
there are an infinite number of variables for simulating anything.  
  
Highlight (color #FFBB01):  
necessary to select a finite number of variables from an infinite number of options.  
  
Highlight (color #FFBB01):  
software simulations run as a series of time steps.  
  
Highlight (color #FFBB01):  
simulation starts at the first step, then the values are recalculated for the second step, and so on.   
  
Highlight (color #FFBB01):  
What happens when the top hits a wall while spinning? Does it fall over? What happens when it moves from a smooth to a rough surface? Does it slow down?  
  
Highlight (color #FFBB01):  
simulation involves bottom-up mechanisms that make it very difficult to predict how a particular system will behave.  
  
Highlight (color #FFBB01):  
Whether designed to reproduce the natural world or to generate novel and unexpected forms, it is this very open-ended quality that makes simulation such a powerful technique.  
  
  
--- Page 151 ---  
  
Highlight (color #FFBB01):  
Modeling Physical Systems  
  
Highlight (color #FFBB01):  
Computers and code have offered a new way to explore these and other systems, and to test our current knowledge.  
  
Highlight (color #FFBB01):  
simulations in the field of physics that focus on gravity and the interactions between objects have become a part of everyday life.   
  
Highlight (color #FFBB01):  
video games feature the realism of the worlds they portray.   
  
Highlight (color #FFBB01):  
games give the player the freedom to find other routes and use objects in the environment in new ways to achieve the goal at hand.  
  
  
--- Page 153 ---  
  
Highlight (color #FFBB01):  
complex processes behind many fascinating natural phenomenon have been described in equations and procedures, making them ideal for exploration in code.  
  
Highlight (color #FFBB01):  
Fractals  
  
Highlight (color #FFBB01):  
reaction-diffusion system  
  
Highlight (color #FFBB01):  
ability to create a wide variety of patterns, from butterfly wings to zebra spots.  
  
  
--- Page 157 ---  
  
Highlight (color #FFBB01):  
Artificial Intelligence  
  
Highlight (color #FFBB01):  
goals of AI are varied  
  
Highlight (color #FFBB01):  
game playing, planning, pattern finding, and social interac-tion.   
  
Highlight (color #FFBB01):  
Each point chooses how to interact with nearby points, how   
  
to move, and how to draw itself  
  
Highlight (color #FFBB01):  
make the points that construct the hands of Loops   
  
‘autonomous'—so that these points are, to a limited degree, live ‘creatures.'”  
  
  
--- Page 160 ---  
  
Highlight (color #FFBB01):  
Evolved Virtual Creatures  
  
Highlight (color #FFBB01):  
Evolved virtual crea-tures compete for the   
  
possession of a cube within this simulated world  
  
Highlight (color #FFBB01):  
37 Evolved Virtual Creatures, by Karl Sims, 1994 Evolved virtual crea-tures compete for the   
  
possession of a cube within this simulated world. The winner of each round of the com-petition receives a   
  
higher score, giving it the ability to survive and reproduce.  
  
  
--- Page 161 ---  
  
Highlight (color #FFBB01):  
Artificial Life and Genetic Algorithms  
  
Highlight (color #FFBB01):  
to simulate reflexes, behaviors, and evolution  
  
Highlight (color #FFBB01):  
creation and study of lifelike organisms and sys-tems  
  
Highlight (color #FFBB01):  
simulations are the foundation for new ways to generate form  
  
Highlight (color #FFBB01):  
simulations based on many kinds of flora and fauna  
  
Highlight (color #FFBB01):  
Instead of creating form directly through drawing or sculpting, it can be grown or evolved using a-life techniques.  
  
Highlight (color #FFBB01):  
genetic algorithm (GA) is a software process that simulates evolution by creating and chang-ing an artificial genome  
  
Highlight (color #FFBB01):  
As in real genetics, an artificial genome is modified through crossbreeding and mutation.  
  
Highlight (color #FFBB01):  
advantage of evolution within a software environment   
  
is the ability to go through thousands of generations (or more) within seconds rather than thousands of years  
  
Highlight (color #FFBB01):  
diversity of life on Earth is the result of a process of evolution involving the gradual accumulation of small changes.   
  
Highlight (color #FFBB01):  
Biomorph, by Richard Dawkins, 1986 Starting from a single pixel in the upper-  
  
left, the form at the bottom evolved through many generations, each with only a single genetic mutation  
  
  
--- Page 162 ---  
  
Highlight (color #FFBB01):  
McCormack explored the growth and   
  
development of plantlike structures, based on native Australian species  
  
  
--- Page 163 ---  
  
Highlight (color #FFBB01):  
simulating the basic physical properties of gravity, friction, and collision, and then building creatures that could evolve at amazingly fast rates through crossbreeding and mutation  
  
Highlight (color #FFBB01):  
John Frazer's 1995 book An Evolutionary Architecture presents the genetic algorithm as a technique for creating novel forms that bridge the form-function divide  
  
Highlight (color #FFBB01):  
intersection of computer and genetic code as an avenue for exploring possible futures.   
  
  
--- Page 165 ---  
  
Highlight (color #FFBB01):  
SIMULATION technique CELLULAR AUTOMATA  
  
Highlight (color #FFBB01):  
cellular automata (CA) is a grid of cells, with the behavior of each cell defined by a set of rules.  
  
Highlight (color #FFBB01):  
simplest CAs are of the one-dimensional type invented by Stephen Wolfram in the early 1980s. Each cell is either white or black (also referred to as alive or dead).  
  
Highlight (color #FFBB01):  
Over time, the cell becomes white or black by following a few rules.  
  
Highlight (color #FFBB01):  
if a cell is white but has one black adjacent cell, it changes to   
  
black. Each generation of cells is drawn below the previous generation so one sees the complete history of life and death within a single image  
  
Highlight (color #FFBB01):  
CA is John Conway's Game of Life  
  
Highlight (color #FFBB01):  
AutomasonMP3, a custom software application that generates brick patterns linked to sim-ple concrete structures  
  
  
--- Page 166 ---  
  
Highlight (color #FFBB01):  
Aggregation 4, by Andy Lomas  
  
Highlight (color #FFBB01):  
gradual accumulation of particles on top of   
  
an initial surface  
  
Highlight (color #FFBB01):  
simulation, millions of particles flow freely until they hit either the initial seed surface or other   
  
particles that have been previously deposited.  
  
  
--- Page 167 ---  
  
Highlight (color #FFBB01):  
SIMULATION technique SWARMS  
  
Highlight (color #FFBB01):  
Software simula-tions for swarming, flocking, and crowd behavior intro-duce the ideas of agents to represent each bee, fish, or person  
  
Highlight (color #FFBB01):  
Each agent follows a set of rules that define its behavior in relation to its local environment.  
  
Highlight (color #FFBB01):  
Boids software, writ-ten by Craig Reynolds, each agent follows three clear rules: steer to avoid crowd-ing local flockmates, steer toward the average heading of local flockmates, steer to move toward the average position of local flockmates.  
  
  
--- Page 169 ---  
  
Highlight (color #FFBB01):  
SIMULATION technique UNNATURAL SELECTION  
  
Highlight (color #FFBB01):  
systems that generate form often need some rubric by which to measure success  
  
Highlight (color #FFBB01):  
part of the system  
  
Highlight (color #FFBB01):  
a “gardener,” choosing favorite specimens and culling weeds to encourage the system to grow in a desired direction.  
  
Highlight (color #FFBB01):  
designer acts  
  
  
--- Page 170 ---  
  
Highlight (color #FFBB01):  
PArtIcLES  
  
Highlight (color #FFBB01):  
Particle systems are an essen-tial technique for simulating nature.  
  
Highlight (color #FFBB01):  
rep-licate the look and behavior of water, fi re, smoke, explosions, clouds, fog, hair, fur, stars, and more  
  
Highlight (color #FFBB01):  
basic particle system, each element has a position and a velocity  
  
Highlight (color #FFBB01):  
advanced systems to simulate water or the movement of stars, each particle is infl uenced by virtual forces such as gravity and friction.  
  
Highlight (color #FFBB01):  
particle can be rendered on-screen as either a single pixel, a small image, or a 3-D object.  
  
Highlight (color #FFBB01):  
basic particle system is created by making multiple copies of a simple particle  
  
Highlight (color #FFBB01):  
Each particle stores some information about itself: its position in space, velocity, and acceleration.  
  
Highlight (color #FFBB01):  
At each step in the simulation, every particle calculates its next location using its current position, velocity, and acceleration.  
  
Highlight (color #FFBB01):  
Finally, each particle is drawn to the screen and the process repeats.  
  
  
--- Page 171 ---  
  
Highlight (color #FFBB01):  
coDE ExAmPLES DIFFUSIon-LImItED AggrEgAtIon  
  
Highlight (color #FFBB01):  
Diffusion-limited aggregation (DLA) is a process for generat-ing organic forms from a few simple rules.  
  
Highlight (color #FFBB01):  
Particles mov-ing through space, typically in a pattern called a random walk, stick together when they collide  
  
Highlight (color #FFBB01):  
form is built up over time as more and more particles collide and clump together.  
  
Highlight (color #FFBB01):  
The process begins with a fi xed seed. Next, virtual par-ticles are created and begin to move through the space.  
  
Highlight (color #FFBB01):  
motion of each particle is created by choosing a new random direction and moving a short distance at each step of the simulation.  
  
Highlight (color #FFBB01):  
When the particle moves, it checks to see if it has collided with the seed or another fi xed particle.   
  
Highlight (color #FFBB01):  
If it collides with either, it stops moving and becomes part of the growing form.  
  
  
(report generated by GoodReader)