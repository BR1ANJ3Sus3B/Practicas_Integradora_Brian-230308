"""Reproduce las especificaciones finales; no modifica el HTML entregado."""
import json
from pathlib import Path

root = Path(__file__).resolve().parent
s = json.loads((root / 'canvas-v1.json').read_text(encoding='utf-8'))
types = ['external', 'frontend', 'cloud', 'backend', 'messagebus', 'security', 'database']
subtitles = ['Practicar sin afectar infraestructura real', 'Jugador · docente · administrador · editor', 'Simulación segura, interactiva y gamificada', 'Unity · Flutter · React / PWA', 'Diagnóstico · evaluación · XP · logros', 'API · Keycloak · MongoDB · Docker', 'Aprendizaje práctico y progreso visible']
for c, kind, subtitle in zip(s['components'], types, subtitles):
    c['type'], c['sublabel'] = kind, subtitle
s['cards'] = [
    {'dot': 'cyan', 'title': 'Narrativa · NovaTech Solutions', 'items': ['Alex, técnico junior, resuelve incidentes.', 'Un Saboteador interno provoca las fallas.']},
    {'dot': 'emerald', 'title': 'Aplicación del conocimiento', 'items': ['Soporte, redes, programación y bases de datos.', 'Servidores, infraestructura y seguridad.']},
    {'dot': 'violet', 'title': 'Operación y seguimiento', 'items': ['Grafana: monitoreo y métricas.', 'Git / GitHub: colaboración; Pages: documentación.']}
]
(root / 'canvas-final.json').write_text(json.dumps(s, ensure_ascii=False, indent=2), encoding='utf-8')
a = {
    'schema_version': 1, 'diagram_type': 'architecture',
    'meta': {'title': 'TI: Soporte en Acción · Arquitectura propuesta', 'quality_profile': 'showcase', 'viewBox': [1380, 760]},
    'components': [
        {'id':'persona','type':'external','label':'Usuario','sublabel':'Acceso según su rol','pos':[550,30],'size':[280,70]},
        {'id':'identidad','type':'security','label':'Keycloak','sublabel':'Autenticación y autorización','pos':[550,175],'size':[280,70]},
        {'id':'juego','type':'frontend','label':'Unity','sublabel':'Videojuego educativo 2D','pos':[70,350],'size':[280,70]},
        {'id':'movil','type':'frontend','label':'Flutter','sublabel':'Perfil, progreso y notificaciones','pos':[550,350],'size':[280,70]},
        {'id':'web','type':'frontend','label':'React / PWA','sublabel':'Gestión, contenido y seguimiento','pos':[1030,350],'size':[280,70]},
        {'id':'servicio','type':'backend','label':'API','sublabel':'Comunicación entre aplicaciones','pos':[550,510],'size':[280,70]},
        {'id':'datos','type':'database','label':'MongoDB','sublabel':'Persistencia de información','pos':[550,670],'size':[280,70]}
    ],
    'connections': [
        {'from':'persona','to':'identidad'},
        *[{'from':'identidad','to':x} for x in ['juego','movil','web']],
        *[{'from':x,'to':'servicio'} for x in ['juego','movil','web']],
        {'from':'servicio','to':'datos'}
    ]
}
# Los extremos ya expresan el acceso, comunicación y persistencia;
# las flechas no especifican protocolos que el equipo no ha definido.
(root / 'arquitectura.json').write_text(json.dumps(a, ensure_ascii=False, indent=2), encoding='utf-8')
